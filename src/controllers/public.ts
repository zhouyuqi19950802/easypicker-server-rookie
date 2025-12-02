import {
  Get,
  Inject,
  Post,
  ReqBody,
  ReqQuery,
  RouterController,
} from 'flash-wolves'

import { PublicService } from '@/service'
import { wrapperCatchError } from '@/utils/context'
import { ReqUserInfo } from '@/decorator'
import { User } from '@/db/entity'
import { UserError } from '@/constants/errorMsg'

@RouterController('public')
export default class PublicController {
  @Inject(PublicService)
  private publicService: PublicService

  @Get('code')
  async getVerCode(
    @ReqQuery('email') email: string,
    @ReqQuery('scene') scene: string,
    @ReqUserInfo() user?: User,
  ) {
    const targetEmail = user?.email || email
    try {
      if (!targetEmail) {
        throw UserError.email.noExist
      }
      const sceneKey
        = (scene as 'register' | 'login' | 'reset' | 'default') || 'default'
      await this.publicService.getVerifyCode(targetEmail, sceneKey)
    }
    catch (error) {
      return wrapperCatchError(error)
    }
  }

  @Get('report/pv', {
    CORS: true,
  })
  @Post('report/pv')
  reportPv() {
    return this.publicService.reportPV()
  }

  @Get('check/email')
  async checkEmailIsExist(@ReqQuery('email') email: string) {
    try {
      await this.publicService.checkEmailIsExist(email)
    }
    catch (error) {
      return wrapperCatchError(error)
    }
  }

  @Post('tip/image')
  getTipImage(
    @ReqBody('key') key: string,
    @ReqBody('data')
    data: {
      uid: number
      name: string
    }[],
  ) {
    return this.publicService.getTipImage(key, data)
  }
}
