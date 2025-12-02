import nodemailer, { Transporter } from 'nodemailer'
import LocalUserDB from './user-local-db'

export interface MailConfig {
  smtpHost: string
  smtpPort: string | number
  useSSL: boolean
  account: string
  password: string
  from?: string
  senderName?: string
  subject?: string
  template?: string
}

interface SendMailOptions {
  to: string
  subject?: string
  text?: string
  html?: string
}

let transporter: Transporter | null = null
let transporterKey = ''

function getConfig(): MailConfig {
  const cfg = LocalUserDB.getUserConfigByType('mail')
  if (!cfg || !cfg.smtpHost) {
    throw new Error('请先在系统邮箱设置中配置 SMTP 信息')
  }
  return {
    smtpHost: cfg.smtpHost,
    smtpPort: cfg.smtpPort,
    useSSL: Boolean(cfg.useSSL),
    account: cfg.account,
    password: cfg.password,
    from: cfg.from,
    senderName: cfg.senderName,
    subject: cfg.subject,
    template: cfg.template,
  }
}

function buildTransporterKey(cfg: MailConfig) {
  return [cfg.smtpHost, cfg.smtpPort, cfg.account, cfg.useSSL].join('-')
}

function createTransporter(cfg: MailConfig) {
  return nodemailer.createTransport({
    host: cfg.smtpHost,
    port: Number(cfg.smtpPort),
    secure: cfg.useSSL,
    auth: {
      user: cfg.account,
      pass: cfg.password,
    },
  })
}

async function ensureTransporter(cfg: MailConfig) {
  const key = buildTransporterKey(cfg)
  if (transporter && transporterKey === key) {
    return transporter
  }
  transporter = createTransporter(cfg)
  transporterKey = key
  return transporter
}

export async function sendMail(options: SendMailOptions, overrideConfig?: MailConfig) {
  const cfg = overrideConfig || getConfig()
  let tp: Transporter
  if (overrideConfig) {
    tp = createTransporter(cfg)
  }
  else {
    tp = await ensureTransporter(cfg)
  }
  const subject = options.subject || cfg.subject || 'EasyPicker 通知'
  const html = options.html || cfg.template
  const fromAddress = cfg.from || cfg.account
  const sender = cfg.senderName ? `"${cfg.senderName}" <${fromAddress}>` : fromAddress
  await tp.sendMail({
    from: sender,
    to: options.to,
    subject,
    text: options.text,
    html,
  })
}

export function getMailConfig() {
  return getConfig()
}

export function resetMailTransporter() {
  transporter = null
  transporterKey = ''
}

