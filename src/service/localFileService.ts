import type { Context } from 'flash-wolves'
import { Inject, InjectCtx, Provide } from 'flash-wolves'
import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import sharp from 'sharp'
import archiver from 'archiver'
import BehaviorService from './behaviorService'
import { getTipImageKey } from '@/utils/stringUtil'
import type { File } from '@/db/model/file'
import {
  keyToLocalPath,
  localPathToKey,
  ensureDir,
  initDirectories,
  getFileInfo,
  createDownloadUrl,
  getThumbnailPath,
  getPreviewPath,
  getThumbnailKey,
  getPreviewKey,
  getCompressedPath,
  getTempPath,
  type LocalFileInfo,
} from '@/utils/localFileUtil'
import type { FWRequest } from 'flash-wolves'

@Provide()
export default class LocalFileService {
  @InjectCtx()
  private ctx: Context

  @Inject(BehaviorService)
  private behaviorService: BehaviorService

  constructor() {
    // 初始化目录
    initDirectories()
  }

  /**
   * 获取文件路径对应的 OSS key
   */
  getOssKey(file: File): string {
    return `easypicker2/${file.task_key || file.taskKey}/${file.hash}/${file.name}`
  }

  /**
   * 获取提示图片的 key
   */
  getTipImageKey(key: string, name: string, uid: number): string {
    return getTipImageKey(key, name, uid)
  }

  /**
   * 保存文件到本地
   * @param key 文件 key
   * @param filePath 源文件路径
   * @returns 是否成功
   */
  async saveFile(key: string, filePath: string): Promise<boolean> {
    try {
      const localPath = keyToLocalPath(key)
      console.log('保存文件, key:', key, 'localPath:', localPath, 'sourcePath:', filePath)
      
      // 确保源文件存在
      if (!fs.existsSync(filePath)) {
        console.error('源文件不存在:', filePath)
        return false
      }

      // 确保目标目录存在
      ensureDir(path.dirname(localPath))
      
      // 复制文件
      fs.copyFileSync(filePath, localPath)
      
      // 验证文件是否成功保存
      if (!fs.existsSync(localPath)) {
        console.error('文件保存后验证失败:', localPath)
        return false
      }

      console.log('文件保存成功, size:', fs.statSync(localPath).size)
      return true
    }
    catch (error) {
      console.error('保存文件失败:', error, 'key:', key, 'filePath:', filePath)
      if (this.ctx) {
        this.behaviorService.error(`保存文件失败:${key}`, String(error))
      }
      return false
    }
  }

  /**
   * 删除文件
   * @param key 文件 key
   */
  deleteObjByKey(key: string): void {
    try {
      const localPath = keyToLocalPath(key)
      if (fs.existsSync(localPath)) {
        fs.unlinkSync(localPath)
      }
      // 同时删除缩略图和预览图
      const thumbnailPath = getThumbnailPath(key)
      const previewPath = getPreviewPath(key)
      if (fs.existsSync(thumbnailPath)) {
        fs.unlinkSync(thumbnailPath)
      }
      if (fs.existsSync(previewPath)) {
        fs.unlinkSync(previewPath)
      }
    }
    catch (error) {
      console.error('删除文件失败:', error)
      if (this.ctx) {
        this.behaviorService.error(`删除失败:${key}${error?.message}`, String(error))
      }
    }
  }

  /**
   * 批量删除文件
   * @param keys 文件 key 数组
   */
  batchDeleteFiles(keys: string[]): void {
    if (!keys.length) {
      return
    }

    for (const key of keys) {
      this.deleteObjByKey(key)
    }

    if (this.ctx) {
      this.behaviorService.add('file', `批量删除文件 ${keys.length} 个`, {
        count: keys.length,
        keys,
      })
    }
  }

  /**
   * 删除指定前缀的所有文件
   * @param prefix 前缀
   */
  deleteFiles(prefix: string): void {
    try {
      const prefixPath = keyToLocalPath(prefix)
      if (!fs.existsSync(prefixPath)) {
        return
      }

      const files = this.listFilesByPrefix(prefix)
      this.batchDeleteFiles(files.map(f => f.key))
    }
    catch (error) {
      console.error('删除文件失败:', error)
      if (this.ctx) {
        this.behaviorService.error(`删除文件失败:${prefix}`, String(error))
      }
    }
  }

  /**
   * 检查文件是否存在
   * @param key 文件 key
   * @returns 是否存在
   */
  async judgeFileIsExist(key: string): Promise<boolean> {
    const localPath = keyToLocalPath(key)
    return fs.existsSync(localPath)
  }

  /**
   * 获取文件信息
   * @param key 文件 key
   * @returns 文件信息
   */
  async getFileInfo(key: string): Promise<LocalFileInfo | null> {
    const localPath = keyToLocalPath(key)
    return getFileInfo(localPath)
  }

  /**
   * 批量获取文件信息
   * @param keys 文件 key 数组
   * @returns 文件信息数组
   */
  async batchFileStatus(keys: string[]): Promise<Array<{ code: number, data?: LocalFileInfo, error?: string }>> {
    const results = await Promise.all(
      keys.map(async (key) => {
        const info = await this.getFileInfo(key)
        if (info) {
          return { code: 200, data: info }
        }
        return { code: 612, error: '文件不存在' }
      }),
    )
    return results
  }

  /**
   * 根据前缀列出文件
   * @param prefix 前缀
   * @returns 文件信息数组
   */
  listFilesByPrefix(prefix: string): LocalFileInfo[] {
    const prefixPath = keyToLocalPath(prefix)
    const files: LocalFileInfo[] = []

    if (!fs.existsSync(prefixPath)) {
      return files
    }

    const listFiles = (dir: string, baseKey: string) => {
      const items = fs.readdirSync(dir)
      for (const item of items) {
        const itemPath = path.join(dir, item)
        const stats = fs.statSync(itemPath)

        if (stats.isDirectory()) {
          listFiles(itemPath, `${baseKey}${item}/`)
        }
        else {
          const key = `${baseKey}${item}`
          const info = getFileInfo(itemPath)
          if (info) {
            files.push(info)
          }
        }
      }
    }

    if (fs.statSync(prefixPath).isDirectory()) {
      listFiles(prefixPath, prefix)
    }
    else {
      const info = getFileInfo(prefixPath)
      if (info) {
        files.push(info)
      }
    }

    return files
  }

  /**
   * 获取文件映射（兼容 QiniuService.getFilesMap）
   * @param files 文件列表
   * @returns 文件映射
   */
  async getFilesMap(files: File[]): Promise<Map<string, LocalFileInfo>> {
    const filesMap = new Map<string, LocalFileInfo>()
    const startTime = Date.now()

    // 获取所有 easypicker2/ 下的文件
    const allFiles = this.listFilesByPrefix('easypicker2/')
    allFiles.forEach((v) => {
      filesMap.set(v.key, v)
    })

    // 兼容 ep1 网站数据
    const oldPrefixList = new Set(
      files
        .filter(v => v.category_key)
        .map((v) => {
          return v.category_key!.split('/')[0]
        })
        .filter(v => !v.includes('"'))
        .filter(v => !v.startsWith('easypicker2')),
    )

    for (const prefix of oldPrefixList) {
      const oldFiles = this.listFilesByPrefix(`${prefix}/`)
      oldFiles.forEach((v) => {
        filesMap.set(v.key, v)
      })
    }

    const expireTime = Date.now() - startTime
    this.behaviorService.add('file', `查询本地文件信息 - ${expireTime}ms`, {
      time: expireTime,
    })

    return filesMap
  }

  /**
   * 生成图片缩略图
   * @param key 文件 key
   * @param width 宽度，默认 200
   * @param height 高度，默认 200
   * @returns 是否成功
   */
  async generateThumbnail(key: string, width = 200, height = 200): Promise<boolean> {
    try {
      const localPath = keyToLocalPath(key)
      if (!fs.existsSync(localPath)) {
        return false
      }

      const thumbnailPath = getThumbnailPath(key)
      ensureDir(path.dirname(thumbnailPath))

      await sharp(localPath)
        .resize(width, height, {
          fit: 'cover',
          position: 'center',
        })
        .jpeg({ quality: 80 })
        .toFile(thumbnailPath)

      return true
    }
    catch (error) {
      console.error('生成缩略图失败:', error)
      return false
    }
  }

  /**
   * 生成图片预览图
   * @param key 文件 key
   * @param maxWidth 最大宽度，默认 1200
   * @param maxHeight 最大高度，默认 1200
   * @returns 是否成功
   */
  async generatePreview(key: string, maxWidth = 1200, maxHeight = 1200): Promise<boolean> {
    try {
      const localPath = keyToLocalPath(key)
      if (!fs.existsSync(localPath)) {
        return false
      }

      const previewPath = getPreviewPath(key)
      ensureDir(path.dirname(previewPath))

      await sharp(localPath)
        .resize(maxWidth, maxHeight, {
          fit: 'inside',
          withoutEnlargement: true,
        })
        .jpeg({ quality: 85 })
        .toFile(previewPath)

      return true
    }
    catch (error) {
      console.error('生成预览图失败:', error)
      return false
    }
  }

  /**
   * 获取图片预览 URL
   * @param key 文件 key
   * @param type 类型：cover 或 preview
   * @param expiredTime 过期时间（秒）
   * @param req 请求对象
   * @returns 预览 URL
   */
  async getImagePreviewUrl(
    key: string,
    type: 'cover' | 'preview',
    expiredTime: number,
    req?: FWRequest,
  ): Promise<string> {
    const localPath = keyToLocalPath(key)
    if (!fs.existsSync(localPath)) {
      return ''
    }

    // 检查是否是图片
    const info = await this.getFileInfo(key)
    if (!info || !info.mimeType.includes('image')) {
      return ''
    }

    // 生成缩略图或预览图（如果不存在）
    if (type === 'cover') {
      const thumbnailPath = getThumbnailPath(key)
      if (!fs.existsSync(thumbnailPath)) {
        await this.generateThumbnail(key)
      }
      const thumbnailKey = getThumbnailKey(key)
      if (fs.existsSync(thumbnailPath)) {
        return createDownloadUrl(thumbnailKey, expiredTime, req)
      }
    }
    else {
      const previewPath = getPreviewPath(key)
      if (!fs.existsSync(previewPath)) {
        await this.generatePreview(key)
      }
      const previewKey = getPreviewKey(key)
      if (fs.existsSync(previewPath)) {
        return createDownloadUrl(previewKey, expiredTime, req)
      }
    }
    return ''
  }

  /**
   * 创建 ZIP 压缩文件
   * @param keys 要压缩的文件 key 数组
   * @param zipName 压缩文件名（不含扩展名）
   * @returns 压缩文件 key
   */
  async makeZipWithKeys(keys: string[], zipName: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const zipPath = getCompressedPath(`${zipName}.zip`)
      ensureDir(path.dirname(zipPath))

      const output = fs.createWriteStream(zipPath)
      const archive = archiver('zip', {
        zlib: { level: 9 }, // 最高压缩级别
      })

      output.on('close', () => {
        const zipKey = `compressed/${zipName}.zip`
        resolve(zipKey)
      })

      archive.on('error', (err) => {
        reject(err)
      })

      archive.pipe(output)

      // 添加文件到压缩包
      for (const key of keys) {
        const localPath = keyToLocalPath(key)
        if (fs.existsSync(localPath)) {
          const fileName = path.basename(key)
          archive.file(localPath, { name: fileName })
        }
      }

      archive.finalize()
    })
  }

  /**
   * 读取文件流
   * @param key 文件 key
   * @returns 文件流
   */
  getFileStream(key: string): fs.ReadStream | null {
    try {
      const localPath = keyToLocalPath(key)
      if (fs.existsSync(localPath)) {
        return fs.createReadStream(localPath)
      }
      return null
    }
    catch (error) {
      console.error('读取文件流失败:', error)
      return null
    }
  }

  /**
   * 获取文件下载 URL
   * @param key 文件 key
   * @param expiredTime 过期时间（秒）
   * @param req 请求对象
   * @returns 下载 URL
   */
  getDownloadUrl(key: string, expiredTime: number, req?: FWRequest): string {
    return createDownloadUrl(key, expiredTime, req)
  }
}

