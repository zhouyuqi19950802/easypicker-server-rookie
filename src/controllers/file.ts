import type {
  Context,
  FWRequest,
} from 'flash-wolves'
import {
  Delete,
  Get,
  Inject,
  InjectCtx,
  Post,
  Put,
  ReqBody,
  ReqParams,
  ReqQuery,
  Response,
  RouterController,
} from 'flash-wolves'
import { ObjectID } from 'mongodb'
import { addBehavior, addErrorLog } from '@/db/logDb'
import { selectFiles, updateFileInfo } from '@/db/fileDb'
import {
  checkLocalCompressStatus,
} from '@/utils/localFileUtil'
import { fileError, publicError } from '@/constants/errorMsg'
import type { User } from '@/db/model/user'
import { ReqUserInfo } from '@/decorator'
import { BehaviorService, FileService, TaskService, LocalFileService } from '@/service'
import { wrapperCatchError } from '@/utils/context'
import { findAction } from '@/db/actionDb'
import { ActionType, type DownloadActionData } from '@/db/model/action'
import { getQiniuFileUrlExpiredTime } from '@/utils/userUtil'
import LocalUserDB from '@/utils/user-local-db'
import type { Files } from '@/db/entity'
import { verifyDownloadToken, keyToLocalPath, getCompressedPath } from '@/utils/localFileUtil'
import { filesTempDir, filesCompressedDir } from '@/constants'
import formidable from 'formidable'
import fs from 'node:fs'
import path from 'node:path'
// TODO: 优化上传逻辑

const power = {
  needLogin: true,
}

const noLogin = {
  needLogin: false,
}

@RouterController('file', power)
export default class FileController {
  @InjectCtx()
  private ctx: Context

  @Inject(FileService)
  private fileService: FileService

  @Inject(BehaviorService)
  private behaviorService: BehaviorService

  @Inject(TaskService)
  private taskService: TaskService

  @Inject(LocalFileService)
  private localFileService: LocalFileService

  /**
   * 获取图片的预览图
   */
  @Post('/image/preview')
  async getPreviewURL(
    @ReqBody('ids') idList: number[],
    @ReqUserInfo() user: User,
    req: FWRequest,
  ) {
    addBehavior(req, {
      module: 'file',
      msg: `获取图片预览链接 用户:${user.account}`,
      data: {
        account: user.account,
        idList,
      },
    })
    const files = await selectFiles(
      {
        id: idList as any,
        userId: user.id,
      },
      ['task_key', 'name', 'hash'],
    )
    const keys = files.map(
      file => `easypicker2/${file.task_key}/${file.hash}/${file.name}`,
    )
    const expiredTime = getQiniuFileUrlExpiredTime(LocalUserDB.getSiteConfig()?.downloadOneExpired || 1)

    const filesStatus = await this.localFileService.batchFileStatus(keys)
    const result = await Promise.all(
      filesStatus.map(async (status, idx) => {
        if (status.code === 200 && status.data?.mimeType?.includes('image')) {
          const cover = await this.localFileService.getImagePreviewUrl(
            keys[idx],
            'cover',
            expiredTime,
            req,
          )
          const preview = await this.localFileService.getImagePreviewUrl(
            keys[idx],
            'preview',
            expiredTime,
            req,
          )
          return {
            cover,
            preview,
          }
        }
        return {
          cover: '',
          preview:
            'https://img.cdn.sugarat.top/mdImg/MTY0OTkwMDMxNTY4NA==649900315684',
        }
      }),
    )
    return result
  }

  @Post('/download/count')
  async downloadCount(
    @ReqBody('ids') idList: number[],
  ) {
    try {
      return await this.fileService.downloadCount(idList)
    }
    catch (error) {
      console.error('获取下载次数失败:', error)
      return wrapperCatchError(error)
    }
  }

  @Put('/name/rewrite')
  async rewriteFilename(
    @ReqBody('id') id: number,
    @ReqBody('name') newName: string,
    @ReqUserInfo() user: User,
    req: FWRequest,
  ) {
    const file = (await selectFiles({ id, userId: user.id }))[0]
    if (!file) {
      addBehavior(req, {
        module: 'file',
        msg: `重命名文件失败 用户:${user.account} 文件id:${id} 新文件名:${newName}`,
      })
      return Response.failWithError(fileError.noPower)
    }
    // 重命名本地文件
    const ossKey = `easypicker2/${file.task_key}/${file.hash}/${file.name}`
    const newOssKey = `easypicker2/${file.task_key}/${file.hash}/${newName}`
    const isOldExist = await this.localFileService.judgeFileIsExist(ossKey)
    const isNewExist = await this.localFileService.judgeFileIsExist(newOssKey)
    if (!isOldExist) {
      return Response.failWithError(fileError.noOssFile)
    }
    if (isNewExist) {
      return Response.failWithError(fileError.ossFileRepeat) // 文件重名
    }
    // 重命名本地文件
    const { keyToLocalPath } = await import('@/utils/localFileUtil')
    const oldPath = keyToLocalPath(ossKey)
    const newPath = keyToLocalPath(newOssKey)
    const { ensureDir } = await import('@/utils/localFileUtil')
    ensureDir(path.dirname(newPath))
    fs.renameSync(oldPath, newPath)
    // 更新数据库
    await updateFileInfo({ id, userId: user.id }, { name: newName })
    addBehavior(req, {
      module: 'file',
      msg: `重命名文件成功 用户:${user.account} 文件id:${id} 新文件名:${newName}`,
    })
  }

  /**
   * 获取文件列表(带下载链接)
   */
  @Get('/list/withUrl')
  async listWithUrl() {
    const { id: userId } = this.ctx.req.userInfo
    const files = await selectFiles({
      userId,
    })
    const expiredTime = getQiniuFileUrlExpiredTime(LocalUserDB.getSiteConfig()?.downloadOneExpired || 1)
    return {
      files: files.map(v => ({
        ...v,
        download: this.localFileService.getDownloadUrl(
          this.fileService.getOssKey(v),
          expiredTime,
          this.ctx.req,
        ),
      })),
    }
  }

  @Get('/one')
  async downloadOne(@ReqQuery('id') id: string) {
    try {
      return await this.fileService.downloadOne(+id)
    }
    catch (error) {
      return wrapperCatchError(error)
    }
  }

  /**
   * 文件重定向下载，记录下载日志，便于统计单文件真实被下载次数
   */
  @Get('/download/:key', noLogin)
  async downloadFile(@ReqParams('key') key: string) {
    console.log('=== 文件下载接口被调用 ===')
    console.log('下载 key:', key)
    
    // 先尝试作为 ObjectID 处理（兼容旧逻辑）
    let fileKey: string | null = null
    let download: any = null

    try {
      ObjectID(key)
      console.log('key 是 ObjectID，查找下载记录')
      // 是 ObjectID，查找下载记录
      const [downloadRecord] = await findAction<DownloadActionData>({
        _id: ObjectID(key),
      })
      if (downloadRecord) {
        download = downloadRecord
        console.log('找到下载记录:', downloadRecord.data)
        // 从 originUrl 中提取文件 key（如果是 token 格式）
        const originUrl = downloadRecord.data.originUrl
        if (originUrl.includes('/file/compress')) {
          // 压缩文件，直接重定向到压缩文件下载 URL
          console.log('检测到压缩文件下载，重定向到:', originUrl)
          this.ctx.res.writeHead(302, { Location: originUrl })
          this.ctx.res.end()
          return
        }
        else if (originUrl.includes('/file/download/')) {
          const token = originUrl.split('/file/download/')[1]
          fileKey = verifyDownloadToken(token)
          console.log('从 originUrl 提取 token:', token, 'fileKey:', fileKey)
        }
        else {
          // 兼容旧格式，直接使用 originUrl 作为 key
          fileKey = downloadRecord.data.originUrl.replace(/^https?:\/\/[^/]+/, '')
          console.log('使用 originUrl 作为 key:', fileKey)
        }
      }
    }
    catch {
      // 不是 ObjectID，直接作为 token 处理
      console.log('key 不是 ObjectID，作为 token 处理')
      fileKey = verifyDownloadToken(key)
      console.log('token 验证结果:', fileKey)
      if (!fileKey) {
        console.error('token 验证失败，key:', key)
        console.error('可能的原因：token 不存在或已过期')
      }
    }

    // 如果通过 token 获取到文件 key
    if (fileKey) {
      console.log('获取到文件 key:', fileKey)
      // 检查是否是缩略图路径或压缩文件路径
      let localPath: string
      if (fileKey.startsWith('thumbnails/')) {
        const { getThumbnailPath, getPreviewPath } = await import('@/utils/localFileUtil')
        // 尝试从 key 中提取原始文件 key（通过 hash 反向查找）
        // 这里简化处理，直接使用缩略图路径
        localPath = path.join(process.cwd(), 'files-manage', fileKey)
      }
      else if (fileKey.startsWith('compressed/')) {
        // 压缩文件路径
        const fileName = fileKey.replace('compressed/', '')
        localPath = path.join(filesCompressedDir, fileName)
        console.log('压缩文件路径:', localPath)
      }
      else {
        localPath = keyToLocalPath(fileKey)
      }

      console.log('文件本地路径:', localPath)
      console.log('文件是否存在:', fs.existsSync(localPath))

      if (fs.existsSync(localPath)) {
        const stats = fs.statSync(localPath)
        const fileName = path.basename(localPath)
        console.log('文件信息 - 名称:', fileName, '大小:', stats.size)

        // 记录下载日志
        if (download) {
          const { account: logAccount, tip: tipName, mimeType, size: fileSize } = download.data
          const logMap = {
            [ActionType.Download]: '下载文件成功',
            [ActionType.Compress]: '归档下载文件成功',
            [ActionType.TemplateDownload]: '下载模板文件',
          }

          this.behaviorService.add('file', `${logMap[download.type]} 用户:${logAccount} 文件:${tipName || fileName} 类型:${mimeType}`, {
            account: logAccount,
            downloadType: download.type,
            name: tipName || fileName,
            size: fileSize || stats.size,
            mimeType,
            downloadActionId: key,
          })
        }

        // 设置响应头并发送文件流
        console.log('设置响应头并开始发送文件流')
        
        // 使用 writeHead 设置状态码和响应头
        this.ctx.res.writeHead(200, {
          'Content-Type': 'application/octet-stream',
          'Content-Disposition': `attachment; filename="${encodeURIComponent(fileName)}"`,
          'Content-Length': stats.size.toString(),
          'Cache-Control': 'no-cache',
          'Access-Control-Allow-Origin': '*',
        })

        // 发送文件流
        const fileStream = fs.createReadStream(localPath)
        
        fileStream.on('open', () => {
          console.log('文件流已打开')
        })
        
        fileStream.on('data', (chunk) => {
          console.log('发送数据块，大小:', chunk.length)
        })
        
        fileStream.on('error', (err) => {
          console.error('文件读取错误:', err)
          if (!this.ctx.res.headersSent) {
            this.ctx.res.writeHead(500, { 'Content-Type': 'application/json;charset=utf-8' })
            this.ctx.res.end(JSON.stringify({ code: 500, msg: '文件读取失败' }))
          } else {
            this.ctx.res.destroy()
          }
        })

        fileStream.on('end', () => {
          console.log('文件流读取完成')
        })

        // 监听响应结束
        this.ctx.res.on('finish', () => {
          console.log('响应已完成')
        })

        this.ctx.res.on('close', () => {
          console.log('响应连接已关闭')
          // 如果客户端断开连接，销毁文件流
          if (!fileStream.destroyed) {
            fileStream.destroy()
          }
        })

        // 将文件流 pipe 到响应，pipe 会自动处理流的结束
        fileStream.pipe(this.ctx.res)
        
        // 返回一个 Promise，等待文件流完成，但不要返回任何值给框架
        // 这样框架就不会尝试自动处理响应
        return new Promise<void>((resolve) => {
          fileStream.on('end', () => {
            console.log('文件流读取完成，Promise resolve')
            resolve()
          })
          fileStream.on('error', () => {
            resolve() // 即使出错也 resolve，避免框架等待
          })
        })
      }
    }

    // 文件不存在或 token 无效
    console.error('文件下载失败 - fileKey:', fileKey, 'key:', key)
    this.behaviorService.add('file', `文件下载失败: ${key}`)
    return Response.failWithError(publicError.request.errorParams)
  }

  @Post('/batch/down')
  async batchDownload(@ReqBody() body) {
    const { ids, zipName } = body
    try {
      const result = await this.fileService.batchDownload(ids, zipName)
      // 压缩文件已生成，直接返回下载链接
      const archiveKey = result.k
      const expiredTime = Math.floor(Date.now() / 1000) + 3600 * 12
      const downloadUrl = this.localFileService.getDownloadUrl(archiveKey, expiredTime, this.ctx.req)
      return {
        ...result,
        downloadUrl, // 直接返回下载链接
      }
    }
    catch (error) {
      return wrapperCatchError(error)
    }
  }

  /**
   * 直接下载压缩文件（通过压缩文件 key）
   * 使用查询参数，避免路径中包含 / 导致路由匹配失败
   */
  @Get('/compress', noLogin)
  async downloadCompressFile(@ReqQuery('key') key: string) {
    console.log('=== 压缩文件下载接口被调用 ===')
    console.log('压缩文件 key:', key)
    console.log('请求 URL:', this.ctx.req.url)
    
    if (!key) {
      console.error('缺少 key 参数')
      return Response.failWithError(publicError.request.errorParams)
    }
    
    // 解码 URL 编码的 key
    const decodedKey = decodeURIComponent(key)
    console.log('解码后的 key:', decodedKey)
    
    // key 格式为 compressed/filename.zip
    let localPath: string
    if (decodedKey.startsWith('compressed/')) {
      const fileName = decodedKey.replace('compressed/', '')
      localPath = path.join(filesCompressedDir, fileName)
    } else {
      // 兼容直接传入文件名的情况
      localPath = path.join(filesCompressedDir, decodedKey)
    }

    console.log('压缩文件本地路径:', localPath)
    console.log('文件是否存在:', fs.existsSync(localPath))

    if (!fs.existsSync(localPath)) {
      console.error('压缩文件不存在:', localPath)
      return Response.failWithError(publicError.request.errorParams)
    }

    const stats = fs.statSync(localPath)
    const fileName = path.basename(localPath)
    console.log('文件信息 - 名称:', fileName, '大小:', stats.size)

    // 设置响应头并发送文件流
    console.log('设置响应头并开始发送文件流')
    
    this.ctx.res.writeHead(200, {
      'Content-Type': 'application/zip',
      'Content-Disposition': `attachment; filename="${encodeURIComponent(fileName)}"`,
      'Content-Length': stats.size.toString(),
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*',
    })

    const fileStream = fs.createReadStream(localPath)

    fileStream.on('error', (err) => {
      console.error('文件读取错误:', err)
      if (!this.ctx.res.headersSent) {
        this.ctx.res.writeHead(500, { 'Content-Type': 'application/json;charset=utf-8' })
        this.ctx.res.end(JSON.stringify({ code: 500, msg: '文件读取失败' }))
      } else {
        this.ctx.res.destroy()
      }
    })

    fileStream.pipe(this.ctx.res)
    
    return new Promise<void>((resolve) => {
      fileStream.on('end', () => {
        console.log('文件流读取完成')
        resolve()
      })
      fileStream.on('error', () => {
        resolve()
      })
    })
  }

  /**
   * 模板文件下载
   */
  @Get('/template', noLogin)
  async downloadTemplate(@ReqQuery() query) {
    const { template, key } = query
    try {
      return await this.fileService.downloadTemplate(template, key)
    }
    catch (error) {
      return wrapperCatchError(error)
    }
  }

  /**
   * 获取上传令牌（兼容接口，返回上传地址）
   */
  @Get('/token', noLogin)
  getUploadToken() {
    this.behaviorService.add('file', '获取文件上传地址')
    return { 
      token: '',
      uploadUrl: '/api/file/upload'
    }
  }

  /**
   * 文件上传接口
   */
  @Post('/upload', noLogin)
  async uploadFile(req: FWRequest) {
    console.log('=== 文件上传接口被调用 ===')
    console.log('URL:', req.url)
    console.log('Method:', req.method)
    console.log('Content-Type:', req.headers['content-type'])
    
    return new Promise((resolve, reject) => {
      const form = formidable({
        multiples: false,
        keepExtensions: true,
        maxFileSize: 1024 * 1024 * 1024 * 5, // 5GB
        uploadDir: filesTempDir, // 使用临时目录
      })

      console.log('formidable 实例创建成功, uploadDir:', filesTempDir)

      form.parse(req, async (err, fields, files) => {
        console.log('formidable parse 回调被调用')
        console.log('err:', err)
        console.log('fields:', JSON.stringify(fields))
        console.log('files:', files ? Object.keys(files) : 'null')
        
        if (err) {
          console.error('文件上传解析错误:', err)
          resolve(Response.fail(500, `文件上传失败: ${err.message}`))
          return
        }

        const file = Array.isArray(files.file) ? files.file[0] : files.file
        if (!file) {
          console.error('未找到上传文件, files:', files)
          resolve(Response.fail(400, '未找到上传文件'))
          return
        }

        try {
          // formidable 解析的 fields 可能是字符串或字符串数组
          const key = Array.isArray(fields.key) ? fields.key[0] : fields.key
          if (!key || typeof key !== 'string') {
            console.error('缺少文件 key 参数, fields:', fields)
            resolve(Response.fail(400, '缺少文件 key 参数'))
            return
          }

          console.log('开始保存文件, key:', key, 'filepath:', file.filepath, 'size:', file.size)

          // 保存文件到本地
          const saved = await this.localFileService.saveFile(key, file.filepath)
          if (!saved) {
            console.error('文件保存失败, key:', key)
            resolve(Response.fail(500, '文件保存失败'))
            return
          }

          console.log('文件保存成功, key:', key)

          // 如果是图片，生成缩略图和预览图
          const info = await this.localFileService.getFileInfo(key)
          if (info && info.mimeType.includes('image')) {
            await this.localFileService.generateThumbnail(key)
            await this.localFileService.generatePreview(key)
          }

          // 删除临时文件
          try {
            fs.unlinkSync(file.filepath)
          }
          catch {
            // 忽略删除临时文件错误
          }

          this.behaviorService.add('file', `文件上传成功: ${key}`, {
            key,
            size: file.size,
            mimeType: file.mimetype,
          })

          // 返回成功响应，格式与前端期望一致 { code: 0, data: {...}, msg: 'ok' }
          const result = {
            code: 0,
            data: {
              key,
              hash: '',
              fsize: file.size,
            },
            msg: 'ok',
          }
          console.log('返回响应:', JSON.stringify(result))
          resolve(result)
        }
        catch (error) {
          console.error('文件上传异常:', error)
          resolve(Response.fail(500, `文件上传失败: ${error}`))
        }
      })

      form.on('error', (err) => {
        console.error('formidable 错误:', err)
        reject(err)
      })
    })
  }

  @Post('/info', noLogin)
  async submitInfo(@ReqBody() data: Files) {
    try {
      const task = await this.taskService.getTaskByKey(data.taskKey)
      if (!task) {
        this.behaviorService.add('file', '提交文件: 参数错误', data)
        throw publicError.request.errorParams
      }

      const { userId } = task
      Object.assign<Files, Partial<Files>>(data, {
        userId,
        categoryKey: '',
        people: data.people || '',
        originName: data.originName || '',
      })
      await this.fileService.addFile(data)
      this.behaviorService.add('file', `提交文件: 文件名:${data.name} 成功`, data)
    }
    catch (error) {
      return wrapperCatchError(error)
    }
  }

  @Get('/list')
  async getAllUserFiles() {
    const { account: logAccount } = this.ctx.req.userInfo
    const files = await this.fileService.getUserFiles()
    this.behaviorService.add('file', `获取文件列表 用户:${logAccount} 成功`, {
      logAccount,
    })
    return {
      files: files.map(v => ({
        ...v,
        // 兼容逻辑
        category_key: v.categoryKey,
        origin_name: v.originName,
        task_name: v.taskName,
        task_key: v.taskKey,
        size: +v.size,
      })),
    }
  }

  @Delete('/one')
  async deleteOneFile(@ReqBody('id') id) {
    const { id: userId } = this.ctx.req.userInfo
    try {
      const file = await this.fileService.findOneFile({
        id,
        userId,
      })
      await this.fileService.deleteOneFile(file)
    }
    catch (error) {
      return wrapperCatchError(error)
    }
  }

  @Delete('/withdraw', noLogin)
  async withdrawFile(@ReqBody() body) {
    try {
      await this.fileService.withdrawFile(body)
    }
    catch (error) {
      return wrapperCatchError(error)
    }
  }

  @Delete('/batch/del')
  async batchDelete(@ReqBody('ids') ids: number[]) {
    try {
      await this.fileService.batchDelete(ids)
    }
    catch (error) {
      return wrapperCatchError(error)
    }
  }

  /**
   * 查询文件归档进度，已下线
   */
  @Post('/compress/status')
  async compressStatus(@ReqBody('id') id: string, req: FWRequest) {
    const data = checkLocalCompressStatus(id)
    if (data.code === 3) {
      addErrorLog(req, data.desc + data.error)
      return Response.fail(500, data.desc + data.error)
    }
    return data
  }

  @Post('submit/people', noLogin)
  async checkSubmitInfo(@ReqBody() body) {
    const result = await this.fileService.checkSubmitInfo(body)
    return result
  }
}
