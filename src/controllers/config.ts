import fs from 'node:fs/promises'
import path from 'node:path'
import mysql from 'mysql'
import redis from 'redis'
import { MongoClient } from 'mongodb'
import {
  Get,
  Inject,
  Post,
  Put,
  ReqBody,
  ReqQuery,
  RouterController,
} from 'flash-wolves'
import { USER_POWER, USER_STATUS } from '@/db/model/user'
import { getRedisStatus } from '@/lib/dbConnect/redis'
import { getMongoDBStatus, refreshMongoDb } from '@/lib/dbConnect/mongodb'
import { getMysqlStatus, refreshPool } from '@/lib/dbConnect/mysql'
import { getQiniuStatus, refreshQinNiuConfig } from '@/utils/qiniuUtil'
import type { UserConfig } from '@/db/model/config'
import { UserConfigLabels } from '@/constants'
import LocalUserDB from '@/utils/user-local-db'
import { initTypeORM } from '@/db'
import { patchTable } from '@/utils/patch'
import type { GlobalSiteConfig } from '@/types'
import { encryption } from '@/utils/stringUtil'
import {
  insertUser,
  selectUserByAccount,
  selectUserByEmail,
  updateUser,
} from '@/db/userDb'
import { rEmail } from '@/utils/regExp'
import { randomNumStr } from '@/utils/randUtil'
import { sendMail, getMailConfig, resetMailTransporter, type MailConfig } from '@/utils/mailUtil'
import { TokenService } from '@/service'
import { UserError } from '@/constants/errorMsg'

const AUTO_SQL_PATH = path.join(
  process.cwd(),
  'docs/sql/auto_create.sql',
)

let cachedAutoCreateSql = ''

interface MysqlInitPayload {
  host: string
  port: string
  database: string
  username: string
  password: string
}

interface RedisConfigPayload {
  host: string
  port: string
  password?: string
}

interface MongoConfigPayload {
  uri: string
}

interface AdminPayload {
  username: string
  email: string
  password: string
}

interface MailConfigPayload {
  smtpHost: string
  smtpPort: string
  useSSL: boolean
  account: string
  password: string
  from?: string
  senderName?: string
  subject?: string
  template?: string
}

interface MailTestPayload {
  target: string
}

interface MailLiveTestPayload extends MailConfigPayload {
  target: string
}

interface FinishInitPayload {
  email: string
  mysql: {
    host: string
    port: string
    database: string
    username: string
    password: string
  }
  admin: {
    username: string
    email: string
    password: string
  }
}

async function loadAutoCreateSql() {
  if (!cachedAutoCreateSql) {
    cachedAutoCreateSql = await fs.readFile(AUTO_SQL_PATH, 'utf-8')
  }
  return cachedAutoCreateSql
}

function normalizeMysqlPayload(payload: MysqlInitPayload) {
  return {
    ...payload,
    port: Number(payload.port) || 3306,
  }
}

function normalizeRedisPayload(payload: RedisConfigPayload) {
  return {
    host: payload.host,
    port: Number(payload.port) || 6379,
    password: payload.password || '',
  }
}

function parseMongoUri(uri: string) {
  const parsed = new URL(uri)
  const auth = Boolean(parsed.username)
  return {
    uri,
    host: parsed.hostname,
    port: Number(parsed.port) || 27017,
    user: parsed.username ? decodeURIComponent(parsed.username) : '',
    password: parsed.password ? decodeURIComponent(parsed.password) : '',
    database: parsed.pathname?.replace('/', '') || 'admin',
    auth,
  }
}

function createMysqlConnection(payload: MysqlInitPayload, useDb = false) {
  const cfg = normalizeMysqlPayload(payload)
  const connectionConfig: mysql.ConnectionConfig = {
    host: cfg.host,
    port: cfg.port,
    user: cfg.username,
    password: cfg.password,
    charset: 'utf8mb4_general_ci',
    multipleStatements: true,
  }
  if (useDb) {
    connectionConfig.database = cfg.database
  }
  return new Promise<mysql.Connection>((resolve, reject) => {
    const connection = mysql.createConnection(connectionConfig)
    connection.connect((err) => {
      if (err) {
        reject(err)
        return
      }
      resolve(connection)
    })
  })
}

function exec(connection: mysql.Connection, sql: string) {
  return new Promise<void>((resolve, reject) => {
    connection.query(sql, (err) => {
      if (err) {
        reject(err)
        return
      }
      resolve()
    })
  })
}

async function ensureMysqlSchema(payload: MysqlInitPayload) {
  const dbPayload = normalizeMysqlPayload(payload)
  const connection = await createMysqlConnection(dbPayload)
  try {
    await exec(
      connection,
      `DROP DATABASE IF EXISTS \`${dbPayload.database}\``,
    )
    await exec(
      connection,
      `CREATE DATABASE IF NOT EXISTS \`${dbPayload.database}\` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci`,
    )
  }
  finally {
    connection.end()
  }

  const dbConnection = await createMysqlConnection(dbPayload, true)
  try {
    const sql = await loadAutoCreateSql()
    await exec(dbConnection, sql)
  }
  finally {
    dbConnection.end()
  }
}

type ConfigEntry = {
  type: UserConfig['type']
  key: string
  value: any
  isSecret?: boolean
}

async function saveConfigEntries(entries: ConfigEntry[]) {
  for (const entry of entries) {
    await LocalUserDB.setUserConfig({
      type: entry.type,
      key: entry.key,
      value: entry.value,
      isSecret: Boolean(entry.isSecret),
    })
  }
  await LocalUserDB.updateLocalEnv()
}

async function persistMysqlConfig(payload: MysqlInitPayload) {
  const cfg = normalizeMysqlPayload(payload)
  await saveConfigEntries([
    { type: 'mysql', key: 'host', value: cfg.host },
    { type: 'mysql', key: 'port', value: cfg.port },
    { type: 'mysql', key: 'database', value: cfg.database },
    { type: 'mysql', key: 'user', value: cfg.username },
    { type: 'mysql', key: 'password', value: cfg.password, isSecret: true },
  ])
  await refreshPool()
  try {
    await initTypeORM()
    await patchTable()
  }
  catch (error) {
    console.log('初始化 TypeORM 失败, 请确认数据库可用', error?.message)
  }
}

async function testMysqlConnection(payload: MysqlInitPayload) {
  const connection = await createMysqlConnection(payload)
  try {
    await exec(connection, 'SELECT 1')
  }
  finally {
    connection.end()
  }
}

function createRedisClient(payload: RedisConfigPayload) {
  const cfg = normalizeRedisPayload(payload)
  const options = cfg.password
    ? {
        password: cfg.password,
      }
    : undefined
  const client = redis.createClient(cfg.port, cfg.host, options)
  return { client, cfg }
}

async function testRedisConnection(payload: RedisConfigPayload) {
  const { client } = createRedisClient(payload)
  return new Promise<void>((resolve, reject) => {
    client.on('ready', () => {
      client.quit()
      resolve()
    })
    client.on('error', (err) => {
      client.quit()
      reject(err)
    })
  })
}

async function persistRedisConfig(payload: RedisConfigPayload) {
  const cfg = normalizeRedisPayload(payload)
  await saveConfigEntries([
    { type: 'redis', key: 'host', value: cfg.host },
    { type: 'redis', key: 'port', value: cfg.port },
    { type: 'redis', key: 'password', value: cfg.password, isSecret: true },
    { type: 'redis', key: 'auth', value: Boolean(cfg.password) },
  ])
  process.env.REDIS_DB_HOST = cfg.host
  process.env.REDIS_DB_PORT = String(cfg.port)
  process.env.REDIS_DB_PASSWORD = cfg.password
  process.env.REDIS_DB_NEED_AUTH = String(Boolean(cfg.password))
}

async function testMongoConnection(payload: MongoConfigPayload) {
  const client = await MongoClient.connect(payload.uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  } as any)
  await client.db().command({ ping: 1 })
  await client.close()
}

async function persistMongoConfig(payload: MongoConfigPayload) {
  const cfg = parseMongoUri(payload.uri)
  await saveConfigEntries([
    { type: 'mongo', key: 'host', value: cfg.host },
    { type: 'mongo', key: 'port', value: cfg.port },
    { type: 'mongo', key: 'database', value: cfg.database },
    { type: 'mongo', key: 'user', value: cfg.user },
    { type: 'mongo', key: 'password', value: cfg.password, isSecret: Boolean(cfg.password) },
    { type: 'mongo', key: 'auth', value: cfg.auth },
    {
      type: 'mongo',
      key: 'uri',
      value: cfg.uri,
      isSecret: Boolean(cfg.password),
    },
  ])
  process.env.MONGO_DB_HOST = cfg.host
  process.env.MONGO_DB_PORT = String(cfg.port)
  process.env.MONGO_DB_NAME = cfg.database
  process.env.MONGO_DB_USER = cfg.user
  process.env.MONGO_DB_PWD = cfg.password
  process.env.MONGO_DB_NEED_AUTH = String(cfg.auth)
  await refreshMongoDb()
}

@RouterController('config', { userPower: USER_POWER.SYSTEM, needLogin: true })
export default class UserController {
  @Inject(TokenService)
  private tokenService: TokenService

  @Get('service/overview')
  async getServiceStatus() {
    const data = await Promise.all([
      getQiniuStatus(),
      getRedisStatus(),
      getMysqlStatus(),
      getMongoDBStatus(),
    ])

    const result = data.reduce((pre, cur) => {
      const { type, ...rest } = cur
      pre[type] = rest
      return pre
    }, {})
    return result
  }

  @Post('init/mysql/test')
  async testMysql(@ReqBody() payload: MysqlInitPayload) {
    await testMysqlConnection(payload)
  }

  @Post('init/mysql')
  async initializeMysql(@ReqBody() payload: MysqlInitPayload) {
    await testMysqlConnection(payload)
    await ensureMysqlSchema(payload)
    await persistMysqlConfig(payload)
  }

  @Post('init/redis/test')
  async testRedis(@ReqBody() payload: RedisConfigPayload) {
    await testRedisConnection(payload)
  }

  @Post('init/redis')
  async initializeRedis(@ReqBody() payload: RedisConfigPayload) {
    await testRedisConnection(payload)
    await persistRedisConfig(payload)
  }

  @Post('init/mongo/test')
  async testMongo(@ReqBody() payload: MongoConfigPayload) {
    await testMongoConnection(payload)
  }

  @Post('init/mongo')
  async initializeMongo(@ReqBody() payload: MongoConfigPayload) {
    await testMongoConnection(payload)
    await persistMongoConfig(payload)
  }

  cleanUserConfig(cfg: UserConfig[]) {
    return cfg.map((v) => {
      const { key, isSecret, value, type } = v
      return {
        key,
        value: isSecret ? '******' : value,
        type,
        label: UserConfigLabels[type][key],
      }
    })
  }

  @Get('service/config')
  async getUserConfig() {
    const mysql = this.cleanUserConfig(
      LocalUserDB.findUserConfig({
        type: 'mysql',
      }),
    )

    const qiniu = this.cleanUserConfig(
      LocalUserDB.findUserConfig({
        type: 'qiniu',
      }),
    )

    const mongo = this.cleanUserConfig(
      LocalUserDB.findUserConfig({
        type: 'mongo',
      }),
    )

    return [
      { title: 'MySQL', data: mysql },
      { title: 'MongoDB', data: mongo },
      { title: '七牛云', data: qiniu },
    ]
  }

  @Post('init/admin')
  async configureAdmin(@ReqBody() body: AdminPayload) {
    const { username, email, password } = body
    if (!username) {
      throw UserError.account.fault
    }
    if (!rEmail.test(email)) {
      throw UserError.email.fault
    }
    if (!password) {
      throw UserError.pwd.fault
    }
    let admin = (await selectUserByAccount(username))[0]
    if (!admin) {
      admin = (await selectUserByEmail(email))[0]
    }
    const passwordHash = encryption(password)
    if (admin) {
      await updateUser(
        {
          account: username,
          email,
          password: passwordHash,
          power: USER_POWER.SUPER,
          status: USER_STATUS.NORMAL,
        },
        {
          id: admin.id,
        },
      )
      return
    }
    await insertUser({
      account: username,
      email,
      password: passwordHash,
      power: USER_POWER.SUPER,
      status: USER_STATUS.NORMAL,
      loginCount: 0,
    })
  }

  @Post('init/admin/verification')
  async sendAdminVerification(@ReqBody('email') email: string) {
    if (!rEmail.test(email)) {
      throw UserError.email.fault
    }
    const code = randomNumStr(4)
    await sendMail({
      to: email,
      subject: 'EasyPicker 管理员验证码',
      html: `<p>您正在初始化 EasyPicker，验证码为 <strong>${code}</strong>，有效期 2 分钟。</p>`,
    })
    this.tokenService.setVerifyCode(email, code, 60 * 2)
    return {
      message: `验证码已发送到 ${email}`,
    }
  }

  @Post('init/finish')
  async finishInitialization(@ReqBody() body: FinishInitPayload) {
    const { email, mysql, admin } = body
    if (!rEmail.test(email)) {
      throw UserError.email.fault
    }
    const cfg = getMailConfig()
    const html = `
      <h2>系统初始化完成</h2>
      <p>系统已完成基础配置，以下是关键信息摘要，请妥善保存：</p>

      <h3>管理员信息：</h3>
      <p>账号：${admin.username}</p>
      <p>密码：${admin.password}</p>
      <p>邮箱：${admin.email}</p>

      <hr />

      <h3>数据库信息：</h3>
      <p>数据库地址：${mysql.host}:${mysql.port}</p>
      <p>数据库名称：${mysql.database}</p>
      <p>用户名：${mysql.username}</p>
    `
    await sendMail({
      to: email,
      subject: cfg.subject || '系统初始化完成',
      html,
    })
    return {
      status: 'ok',
    }
  }

  @Post('init/mail')
  async configureMail(@ReqBody() body: MailConfigPayload) {
    if (!body.smtpHost || !body.account || !body.password) {
      throw UserError.account.fault
    }
    await saveConfigEntries([
      { type: 'mail', key: 'smtpHost', value: body.smtpHost },
      { type: 'mail', key: 'smtpPort', value: body.smtpPort },
      { type: 'mail', key: 'useSSL', value: body.useSSL },
      { type: 'mail', key: 'account', value: body.account },
      { type: 'mail', key: 'password', value: body.password, isSecret: true },
      { type: 'mail', key: 'from', value: body.from || body.account },
      { type: 'mail', key: 'senderName', value: body.senderName || '' },
      { type: 'mail', key: 'subject', value: body.subject || 'EasyPicker 通知' },
      { type: 'mail', key: 'template', value: body.template || '' },
    ])
    resetMailTransporter()
  }

  @Post('init/mail/test')
  async sendMailTest(@ReqBody() body: MailTestPayload) {
    if (!rEmail.test(body.target)) {
      throw UserError.email.fault
    }
    const cfg = getMailConfig()
    await sendMail({
      to: body.target,
      subject: cfg.subject || 'EasyPicker 测试邮件',
      html: cfg.template
        || '<p>这是一封测试邮件，如果您收到该邮件说明 SMTP 配置正常。</p>',
    })
  }

  @Post('init/mail/test/live')
  async sendMailLiveTest(@ReqBody() body: MailLiveTestPayload) {
    const {
      smtpHost,
      smtpPort,
      useSSL,
      account,
      password,
      from,
      senderName,
      subject,
      template,
      target,
    } = body
    if (!smtpHost || !account || !password) {
      throw UserError.account.fault
    }
    if (!rEmail.test(target)) {
      throw UserError.email.fault
    }
    const mailConfig: MailConfig = {
      smtpHost,
      smtpPort,
      useSSL,
      account,
      password,
      from: from || account,
      senderName,
      subject,
      template,
    }
    await sendMail({
      to: target,
      subject: subject || 'EasyPicker 测试邮件',
      html: template
        || '<p>这是一封测试邮件，如果您收到该邮件说明 SMTP 配置正常。</p>',
    }, mailConfig)
  }

  @Put('service/config')
  async updateUserConfig(@ReqBody() data: Partial<UserConfig>) {
    const wrapperValue = (key: string, v: any) => {
      const num = ['port']
      const bool = ['auth']
      const boolString = ['imageCoverStyle', 'imagePreviewStyle']
      if (num.includes(key)) {
        return +v
      }
      if (bool.includes(key)) {
        return String(true) === v
      }
      if (boolString.includes(key)) {
        return String(false) === v ? '' : v
      }
      return v
    }
    await LocalUserDB.updateUserConfig(
      {
        type: data.type,
        key: data.key,
      },
      {
        value: wrapperValue(data.key, data.value),
      },
    )
    if (data.type === 'mysql') {
      await refreshPool()
      try {
        await initTypeORM()
        await patchTable()
      }
      catch (error) {
        // empty
      }
    }
    if (data.type === 'qiniu') {
      await refreshQinNiuConfig()
    }
    if (data.type === 'mongo') {
      await refreshMongoDb()
    }
    await LocalUserDB.updateLocalEnv()
  }

  @Get('global', { needLogin: false, userPower: null })
  async getGlobalConfig(@ReqQuery('type') key = 'site') {
    const globalConfig = LocalUserDB.findUserConfig({
      type: 'global',
      key,
    })
    const siteConfig
      = globalConfig[0]?.value
      || (key === 'site' ? LocalUserDB.getSiteConfig() : {})
      || {}
    const filterKey: (keyof GlobalSiteConfig)[] = ['maxInputLength', 'openPraise', 'formLength', 'compressSizeLimit', 'needBindEmail', 'limitSpace', 'limitWallet', 'moneyStartDay', 'appName']
    return filterKey.reduce((pre, cur) => {
      pre[cur] = siteConfig[cur]
      return pre
    }, {})
  }

  @Get('global/all', { userPower: USER_POWER.SUPER })
  async getAllGlobalConfig(@ReqQuery('type') key = 'site') {
    const globalConfig = LocalUserDB.findUserConfig({
      type: 'global',
      key,
    })
    return globalConfig[0]?.value || (key === 'site' ? LocalUserDB.getSiteConfig() : {})
  }

  @Put('global', { userPower: USER_POWER.SUPER })
  async updateGlobalConfig(@ReqBody() data) {
    const { key, value } = data
    await LocalUserDB.updateUserConfig(
      {
        type: 'global',
        key,
      },
      {
        value,
      },
    )
  }
}
