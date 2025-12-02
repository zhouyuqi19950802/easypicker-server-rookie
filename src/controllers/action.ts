import path from 'node:path'
import type { Context, FWRequest } from 'flash-wolves'
import { InjectCtx, Post, ReqBody, RouterController } from 'flash-wolves'
import type { FilterQuery } from 'mongodb'
import {
  findActionCount,
  findActionWithPageOffset,
  updateAction,
} from '@/db/actionDb'
import type {
  Action,
  DownloadAction,
  DownloadActionData,
} from '@/db/model/action'
import {
  ActionType,
  DownloadStatus,
} from '@/db/model/action'
import {
  checkLocalCompressStatus,
  getCompressedFileInfo,
} from '@/utils/localFileUtil'
import LocalFileService from '@/service/localFileService'
import { shortLink } from '@/utils/stringUtil'
import { Inject } from 'flash-wolves'

@RouterController('action', {
  needLogin: true,
})
export default class ActionController {
  @InjectCtx()
  ctx!: Context

  @Inject(LocalFileService)
  private localFileService: LocalFileService

  @Post('download/list')
  async getDownloadActionList(
    @ReqBody('pageSize') size: number,
    @ReqBody('pageIndex') index: number,
    @ReqBody('extraIds') ids: string[],
  ) {
    const pageIndex = +(index ?? 1)
    const extraIds = ids ?? []
    const pageSize = Math.max(+(size ?? 3), extraIds.length)
    const user = this.ctx.req.userInfo
    const query: FilterQuery<Action> = {
      $or: [
        ...extraIds.map(e => ({ id: e })),
        { type: ActionType.Download },
        { type: ActionType.Compress },
      ],
      userId: user.id,
    }
    const count = await findActionCount(query)
    const actions: DownloadAction[] = await findActionWithPageOffset(
      (pageIndex - 1) * pageSize,
      pageSize,
      query,
    )
    // 校验是否有效
    const now = Date.now()
    const expiredHours = 12
    const oneHour = 1000 * 60 * 60
    for (const action of actions) {
      let needUpdate = false
      // 检查是否过期
      if (action.data.status === DownloadStatus.SUCCESS) {
        const pass = Math.floor((now - +action.date) / oneHour)
        if (action.data.expiredTime && now > action.data.expiredTime) {
          action.data.status = DownloadStatus.EXPIRED
          needUpdate = true
        }
        else if (pass >= expiredHours) {
          action.data.status = DownloadStatus.EXPIRED
          needUpdate = true
        }
      }

      // 检查归档是否完成（本地存储中压缩文件是立即生成的）
      if (action.data.status === DownloadStatus.ARCHIVE) {
        console.log('检查归档状态, archiveKey:', action.data.archiveKey)
        const data = checkLocalCompressStatus(action.data.archiveKey || '')
        console.log('压缩状态检查结果:', data)
        if (data.error) {
          console.error('压缩文件检查失败:', data.error)
          action.data.status = DownloadStatus.FAIL
          action.data.error = data.error
          needUpdate = true
        }
        if (data.code === 0 && data.key) {
          console.log('压缩文件已就绪, 开始获取文件信息')
          // 获取压缩文件信息（使用专门的函数）
          const fileInfo = getCompressedFileInfo(data.key)
          console.log('压缩文件信息:', fileInfo)
          if (fileInfo) {
            action.data.status = DownloadStatus.SUCCESS
            // 获取过期时间（12小时）
            const expiredTime = Math.floor(Date.now() / 1000) + 3600 * 12

            // 直接使用压缩文件 key 生成下载链接，不依赖 token
            // 使用查询参数，避免路径中包含 / 导致路由匹配失败
            const origin = this.ctx.req.headers.origin || this.ctx.req.headers.referer || 'http://localhost:3000'
            const baseUrl = new URL(origin).origin
            const encodedKey = encodeURIComponent(data.key)
            // 去掉 /api 前缀，因为后端路由是 /file/compress，不是 /api/file/compress
            action.data.originUrl = `${baseUrl}/file/compress?key=${encodedKey}`
            console.log('生成的下载链接:', action.data.originUrl)
            // @ts-expect-error
            action.data.url = shortLink(action._id, this.ctx.req)
            action.data.size = fileInfo.fsize
            action.data.expiredTime = expiredTime * 1000
            const filename = path.parse(fileInfo.key).name
            action.data.name = filename
            action.data.account = user.account
            action.data.mimeType = fileInfo.mimeType
            // 归档完成，常理上前端会触发下载，记录一下
            // 移动至，真正下载位置记录
            needUpdate = true
            console.log('压缩文件状态已更新为 SUCCESS')
          }
          else {
            console.error('压缩文件信息获取失败, key:', data.key)
            action.data.status = DownloadStatus.FAIL
            action.data.error = '压缩文件信息获取失败'
            needUpdate = true
          }
        }
      }
      // 异步更新落库
      if (needUpdate) {
        updateAction<DownloadActionData>(
          { id: action.id },
          {
            $set: {
              data: {
                ...action.data,
              },
            },
          },
        )
      }
    }

    // 获取文件信息
    return {
      sum: count,
      pageIndex: index,
      pageSize: size,
      actions: actions.map(v => ({
        id: v.id,
        type: v.type,
        status: v.data.status,
        url: v.data.url,
        tip: v.data.tip,
        date: +v.date,
        size: v.data.size,
        error: v.data.error,
      })),
    }
  }
}
