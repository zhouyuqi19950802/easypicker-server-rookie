import process from 'node:process'
import type { Context } from 'flash-wolves'
import { Inject, InjectCtx, Provide, Response } from 'flash-wolves'
import { rEmail } from '@/utils/regExp'
import { UserError } from '@/constants/errorMsg'
import { randomNumStr } from '@/utils/randUtil'
import { BehaviorService, TokenService } from '@/service'
import { UserRepository } from '@/db/userDb'
import { getMailConfig, sendMail } from '@/utils/mailUtil'
import { LocalFileService } from '@/service'
import { getQiniuFileUrlExpiredTime } from '@/utils/userUtil'
import LocalUserDB from '@/utils/user-local-db'

@Provide()
export default class PublicService {
  @InjectCtx()
  private ctx: Context

  @Inject(BehaviorService)
  private behaviorService: BehaviorService

  @Inject(TokenService)
  private tokenService: TokenService

  @Inject(UserRepository)
  private userRepository: UserRepository

  @Inject(LocalFileService)
  private localFileService: LocalFileService

  /**
   * 获取邮箱验证码
   * @param email 目标邮箱
   * @param scene 使用场景:
   *  - register: 注册 / 绑定邮箱，要求邮箱未被使用
   *  - login/reset: 登录验证码 / 重置密码，要求邮箱已存在
   *  - default: 其他场景，不强制校验存在性
   */
  async getVerifyCode(
    email: string,
    scene: 'register' | 'login' | 'reset' | 'default' = 'default',
  ) {
    // 邮箱不正确,直接返回
    if (!rEmail.test(email)) {
      this.behaviorService.add(
        'public',
        `获取验证码 邮箱:${email} 格式不正确`,
        {
          email,
        },
      )
      throw UserError.email.fault
    }

    // 登录/重置密码场景：邮箱必须已存在
    if (scene === 'login' || scene === 'reset') {
      let user = await this.userRepository.findOne({ email })
      if (!user) {
        user = await this.userRepository.findOne({ account: email })
      }
      if (!user) {
        this.behaviorService.add(
          'public',
          `获取验证码 邮箱:${email} 不存在`,
          { email },
        )
        throw UserError.email.noExist
      }
    }
    const code = randomNumStr(4)
    const cfg = getMailConfig()
    const htmlTemplate
      = cfg.template
      || `<p>您正在请求 EasyPicker 验证码，请在 2 分钟内使用。验证码：<strong>${code}</strong></p>`
    const html = htmlTemplate.replace(/{{\s*code\s*}}/gi, code)
    const maskedEmail = email.replace(
      /(.{2}).+(@.+)/,
      (_, prefix, suffix) => `${prefix}***${suffix}`,
    )
    this.behaviorService.add(
      'public',
      `获取验证码 邮箱:${maskedEmail} 验证码:${code} 成功`,
      {
        email: maskedEmail,
        code,
      },
    )
    await sendMail({
      to: email,
      subject: cfg.subject || 'EasyPicker 验证码',
      html,
    })
    this.tokenService.setVerifyCode(email, code)
  }

  reportPV() {
    const { req } = this.ctx
    const handler = (path?: string) => {
      if (!path) {
        return
      }
      try {
        this.behaviorService.addPV(path)
      }
      catch (error) {
        console.warn('[public/report/pv] skip pv log:', error?.message || error)
      }
    }
    if (req.method === 'GET') {
      handler(req.query?.path as string)
      return Response.plain('<h1>ok</h1>', 'text/html;charset=utf-8')
    }
    handler(req.body?.path)
  }

  async checkEmailIsExist(email: string) {
    if (!rEmail.test(email)) {
      this.behaviorService.add(
        'public',
        `检查邮箱是否存在 邮箱:${email} 格式不正确`,
        {
          email,
        },
      )

      return Response.failWithError(UserError.email.fault)
    }
    let user = await this.userRepository.findOne({ email })

    if (!user) {
      user = await this.userRepository.findOne({ account: email })
    }
    if (user) {
      this.behaviorService.add(
        'public',
        `检查邮箱是否存在 邮箱:${email} 已存在`,
        {
          email,
        },
      )
      throw UserError.email.exist
    }
    this.behaviorService.add(
      'public',
      `检查邮箱是否存在 邮箱:${email} 不存在`,
      {
        email,
      },
    )
  }

  async getTipImage(
    key: string,
    data: {
      uid: number
      name: string
    }[],
  ) {
    const expiredTime = getQiniuFileUrlExpiredTime(LocalUserDB.getSiteConfig()?.downloadOneExpired || 1)
    return Promise.all(
      data.map(async (v) => {
        const tipKey = `easypicker2/tip/${key}/${v.uid}/${v.name}`
        const cover = await this.localFileService.getImagePreviewUrl(
          tipKey,
          'cover',
          expiredTime,
          this.ctx.req,
        )
        const preview = await this.localFileService.getImagePreviewUrl(
          tipKey,
          'preview',
          expiredTime,
          this.ctx.req,
        )
        return {
          cover,
          preview,
        }
      }),
    )
  }
}
