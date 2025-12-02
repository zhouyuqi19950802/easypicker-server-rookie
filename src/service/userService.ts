/* eslint-disable no-throw-literal */
import { Inject, Provide } from 'flash-wolves'
import { UserError } from '@/constants/errorMsg'
import { UserRepository } from '@/db/userDb'
import { rAccount, rEmail, rPassword } from '@/utils/regExp'
import { encryption, formatDate, getUniqueKey } from '@/utils/stringUtil'
import { User } from '@/db/entity'
import { BehaviorService, TokenService } from '@/service'
import { USER_STATUS } from '@/db/model/user'
import { randomNumStr } from '@/utils/randUtil'
import LocalUserDB from '@/utils/user-local-db'

@Provide()
export default class UserService {
  @Inject(BehaviorService)
  private behaviorService: BehaviorService

  @Inject(UserRepository)
  private userRepository: UserRepository

  @Inject(TokenService)
  private tokenService: TokenService

  async register(payload: any) {
    const {
      account,
      pwd,
      bindEmail,
      email,
      code,
    } = payload
    const { needBindEmail } = LocalUserDB.getSiteConfig()
    // 注册必须绑定邮箱卡控
    if (needBindEmail && !bindEmail) {
      throw UserError.account.bindEmail
    }

    // TODO：参数校验可优化使用zod
    if (!rAccount.test(account)) {
      this.behaviorService.add('user', `新用户注册 账号:${account} 格式错误`, {
        account,
      })
      throw UserError.account.fault
    }
    if (!rPassword.test(pwd)) {
      this.behaviorService.add(
        'user',
        `新用户注册 账号:${account} 密码格式不正确`,
        {
          account,
        },
      )
      throw UserError.pwd.fault
    }
    // 检查账号是否存在
    let user = await this.userRepository.findOne({ account })
    // 账号是邮箱格式，那么该邮箱不能已经注册
    if (rEmail.test(account) && !user) {
      user = await this.userRepository.findOne({ email: account })
    }
    // 存在返回错误
    if (user) {
      this.behaviorService.add('user', `新用户注册 账号:${account} 已存在`, {
        account,
      })
      throw UserError.account.exist
    }

    // 绑定手机
    if (bindEmail) {
      if (!rEmail.test(email)) {
        this.behaviorService.add(
          'user',
          `新用户注册 邮箱:${email} 格式错误`,
          {
            email,
          },
        )
        throw UserError.email.fault
      }
      const rightCode = await this.tokenService.getVerifyCode(email)
      if (!code || code !== rightCode) {
        this.behaviorService.add('user', `新用户注册 邮箱验证码错误:${code}`, {
          code,
          rightCode,
        })
        throw UserError.code.fault
      }
      // 检查邮箱是否存在
      user = await this.userRepository.findOne({ email })
      // 检查该邮箱是否出现在账号中
      if (!user) {
        user = await this.userRepository.findOne({ account: email })
      }
      // 存在返回错误
      if (user) {
        this.behaviorService.add('user', `新用户注册 邮箱:${email} 已存在`)
        throw UserError.email.exist
      }
      // 过期验证码
      this.tokenService.expiredToken(email)
    }

    this.behaviorService.add(
      'user',
      `新用户注册 账号:${account} 绑定邮箱:${bindEmail ? '是' : '否'} 注册成功`,
      {
        account,
        bindEmail,
      },
    )
    // 不存在则加入
    const u = new User()
    u.account = account
    u.password = encryption(pwd)
    if (bindEmail) {
      u.email = email
    }

    return this.userRepository.insert(u)
  }

  async login(account: string, pwd: string) {
    const isEmail = rEmail.test(account)
    // 密码格式不正确
    if (!rPassword.test(pwd)) {
      this.behaviorService.add(
        'user',
        `用户登录 账号:${account} 密码格式不正确`,
        {
          account,
        },
      )

      throw UserError.pwd.fault
    }
    // 规避注册时逻辑导致的问题

    // 先当做账号处理
    let user = await this.userRepository.findOne({ account })
    // 不存在&&不是邮箱
    if (!user && !isEmail) {
      this.behaviorService.add('user', `用户登录 账号:${account} 不存在`, {
        account,
      })
      throw UserError.account.fault
    }

    // 不存在&&是邮箱
    if (!user && isEmail) {
      user = await this.userRepository.findOne({ email: account })
    }
    if (!user) {
      this.behaviorService.add('user', `用户登录 账号:${account} 不存在`, {
        account,
      })

      throw isEmail ? UserError.email.fault : UserError.account.fault
    }
    if (user.password !== encryption(pwd)) {
      this.behaviorService.add('user', `用户登录 账号:${account} 密码不正确`, {
        account,
      })

      throw UserError.pwd.fault
    }
    this.checkUserStatus(user)
    this.behaviorService.add('user', `用户登录 账号:${account} 登录成功`, {
      account,
    })
    return this.userRepository.update(user)
  }

  async loginByCode(email: string, code: string) {
    if (!rEmail.test(email)) {
      throw UserError.email.fault
    }
    const maskedEmail = email?.replace(
      /(.{2}).+(@.+)/,
      (_, prefix, suffix) => `${prefix}***${suffix}`,
    )
    const v = await this.tokenService.getVerifyCode(email)
    if (code !== v) {
      this.behaviorService.add('user', `验证码登录 验证码错误:${code}`, {
        code,
        rightCode: v,
      })
      throw UserError.code.fault
    }
    const user = await this.userRepository.findOne({ email })

    if (!user) {
      this.behaviorService.add('user', `验证码登录 邮箱:${maskedEmail} 不存在`, {
        email: maskedEmail,
      })
      throw UserError.email.noExist
    }

    this.checkUserStatus(user)
    this.behaviorService.add('user', `验证码登录 邮箱:${maskedEmail} 登录成功`, {
      email: maskedEmail,
    })
    this.tokenService.expiredVerifyCode(email)
    return this.userRepository.update(user)
  }

  async updatePassword(payload) {
    const { code, email, pwd } = payload

    const maskedEmail = email?.replace(
      /(.{2}).+(@.+)/,
      (_, prefix, suffix) => `${prefix}***${suffix}`,
    )
    const v = await this.tokenService.getVerifyCode(email)
    if (code !== v) {
      this.behaviorService.add(
        'user',
        `重置密码 邮箱:${maskedEmail} 验证码不正确: ${code}`,
        {
          email: maskedEmail,
          code,
          rightCode: v,
        },
      )
      throw UserError.code.fault
    }
    const user = await this.userRepository.findOne({ email })

    if (!user) {
      this.behaviorService.add('user', `重置密码 邮箱:${maskedEmail} 不存在`, {
        email: maskedEmail,
      })
      throw UserError.email.noExist
    }
    if (!rPassword.test(pwd)) {
      this.behaviorService.add(
        'user',
        `重置密码 邮箱:${maskedEmail} 密码格式不正确`,
        {
          email: maskedEmail,
        },
      )
      throw UserError.pwd.fault
    }
    user.password = encryption(pwd)
    this.tokenService.expiredVerifyCode(email)
    this.behaviorService.add('user', `重置密码 邮箱:${maskedEmail} 重置成功`, {
      email: maskedEmail,
    })

    this.checkUserStatus(user)
    return this.userRepository.update(user)
  }

  /**
   * 登录前用户状态检查
   */
  checkUserStatus(user: User) {
    const { account } = user
    // 权限校验
    if (user.status === USER_STATUS.BAN) {
      this.behaviorService.add(
        'user',
        `用户登录失败 账号:${account} 已被封禁`,
        {
          account,
        },
      )

      throw UserError.account.ban
    }
    if (user.status === USER_STATUS.FREEZE) {
      const openDate = new Date(user.openTime)
      if (openDate.getTime() > Date.now()) {
        this.behaviorService.add(
          'user',
          `用户登录失败 账号:${account} 已被冻结 解冻时间${formatDate(
            openDate,
          )}`,
          {
            account,
            openDate,
          },
        )
        throw {
          code: UserError.account.freeze.code,
          msg: UserError.account.freeze.msg,
          data: {
            openTime: user.openTime,
          },
        }
      }
      user.status = USER_STATUS.NORMAL
      user.openTime = null
    }

    // 校验通过，将会登录
    user.loginCount += 1
    user.loginTime = new Date()
  }
}
