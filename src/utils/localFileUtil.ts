import path from 'node:path'
import fs from 'node:fs'
import crypto from 'node:crypto'
import type { FWRequest } from 'flash-wolves'
import {
  filesUploadDir,
  filesThumbnailsDir,
  filesCompressedDir,
  filesTempDir,
} from '@/constants'

// 本地文件信息接口（兼容 Qiniu.ItemInfo）
export interface LocalFileInfo {
  key: string
  hash: string
  fsize: number
  mimeType: string
  putTime: number
  type: number
  status: 0
  md5: string
}

// 临时下载链接存储（内存存储，生产环境建议使用 Redis）
const downloadTokens = new Map<string, {
  key: string
  expiredTime: number
}>()

/**
 * 将 OSS key 转换为本地文件路径
 * @param key OSS key，如 easypicker2/task_key/hash/filename
 * @returns 本地文件路径
 */
export function keyToLocalPath(key: string): string {
  return path.join(filesUploadDir, key)
}

/**
 * 将本地文件路径转换为 OSS key
 * @param localPath 本地文件路径
 * @returns OSS key
 */
export function localPathToKey(localPath: string): string {
  const relativePath = path.relative(filesUploadDir, localPath)
  return relativePath.replace(/\\/g, '/')
}

/**
 * 确保目录存在
 */
export function ensureDir(dirPath: string): void {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }
}

/**
 * 初始化必要的目录
 */
export function initDirectories(): void {
  ensureDir(filesUploadDir)
  ensureDir(filesThumbnailsDir)
  ensureDir(filesCompressedDir)
  ensureDir(filesTempDir)
}

/**
 * 获取文件信息
 * @param filePath 文件路径
 * @returns 文件信息
 */
export function getFileInfo(filePath: string): LocalFileInfo | null {
  try {
    if (!fs.existsSync(filePath)) {
      return null
    }

    const stats = fs.statSync(filePath)
    const key = localPathToKey(filePath)
    const ext = path.extname(filePath).toLowerCase()
    const mimeType = getMimeType(ext)

    return {
      key,
      hash: '',
      fsize: stats.size,
      mimeType,
      putTime: Math.floor(stats.mtimeMs / 1000),
      type: stats.isDirectory() ? 1 : 0,
      status: 0,
      md5: '',
    }
  }
  catch (error) {
    console.error('获取文件信息失败:', error)
    return null
  }
}

/**
 * 根据扩展名获取 MIME 类型
 */
function getMimeType(ext: string): string {
  const mimeTypes: Record<string, string> = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.pdf': 'application/pdf',
    '.doc': 'application/msword',
    '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    '.xls': 'application/vnd.ms-excel',
    '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    '.zip': 'application/zip',
    '.txt': 'text/plain',
    '.mp4': 'video/mp4',
    '.mp3': 'audio/mpeg',
  }
  return mimeTypes[ext] || 'application/octet-stream'
}

/**
 * 生成临时下载链接 token
 * @param key 文件 key
 * @param expiredTime 过期时间（秒）
 * @returns token
 */
export function generateDownloadToken(key: string, expiredTime: number): string {
  const token = crypto.randomBytes(32).toString('hex')
  downloadTokens.set(token, {
    key,
    expiredTime,
  })
  return token
}

/**
 * 验证并获取下载 token 对应的文件 key
 * @param token token
 * @returns 文件 key，如果 token 无效或过期则返回 null
 */
export function verifyDownloadToken(token: string): string | null {
  const tokenInfo = downloadTokens.get(token)
  if (!tokenInfo) {
    return null
  }

  const now = Math.floor(Date.now() / 1000)
  if (now > tokenInfo.expiredTime) {
    downloadTokens.delete(token)
    return null
  }

  return tokenInfo.key
}

/**
 * 清理过期的 token
 */
export function cleanExpiredTokens(): void {
  const now = Math.floor(Date.now() / 1000)
  for (const [token, info] of downloadTokens.entries()) {
    if (now > info.expiredTime) {
      downloadTokens.delete(token)
    }
  }
}

/**
 * 获取文件下载 URL（临时链接）
 * @param key 文件 key
 * @param expiredTime 过期时间（秒）
 * @param req 请求对象
 * @returns 下载 URL
 */
export function createDownloadUrl(key: string, expiredTime: number, req?: FWRequest): string {
  const token = generateDownloadToken(key, expiredTime)
  console.log('生成下载 token, key:', key, 'token:', token, 'expiredTime:', expiredTime)
  if (req) {
    const origin = req.headers.origin || req.headers.referer || 'http://localhost'
    const baseUrl = new URL(origin).origin
    const url = `${baseUrl}/api/file/download/${token}`
    console.log('生成的下载 URL:', url)
    return url
  }
  const url = `/api/file/download/${token}`
  console.log('生成的下载 URL (无 req):', url)
  return url
}

/**
 * 获取缩略图路径
 * @param key 文件 key
 * @returns 缩略图路径
 */
export function getThumbnailPath(key: string): string {
  const hash = crypto.createHash('md5').update(key).digest('hex')
  return path.join(filesThumbnailsDir, `${hash}.jpg`)
}

/**
 * 获取预览图路径
 * @param key 文件 key
 * @returns 预览图路径
 */
export function getPreviewPath(key: string): string {
  const hash = crypto.createHash('md5').update(key).digest('hex')
  return path.join(filesThumbnailsDir, `${hash}_preview.jpg`)
}

/**
 * 获取缩略图 key（用于下载链接）
 * @param key 文件 key
 * @returns 缩略图 key
 */
export function getThumbnailKey(key: string): string {
  const hash = crypto.createHash('md5').update(key).digest('hex')
  return `thumbnails/${hash}.jpg`
}

/**
 * 获取预览图 key（用于下载链接）
 * @param key 文件 key
 * @returns 预览图 key
 */
export function getPreviewKey(key: string): string {
  const hash = crypto.createHash('md5').update(key).digest('hex')
  return `thumbnails/${hash}_preview.jpg`
}

/**
 * 获取压缩文件路径
 * @param zipName 压缩文件名
 * @returns 压缩文件路径
 */
export function getCompressedPath(zipName: string): string {
  return path.join(filesCompressedDir, zipName)
}

/**
 * 检查本地压缩任务状态（本地存储中压缩文件是立即生成的）
 * @param archiveKey 压缩文件 key，如 compressed/filename.zip
 * @returns 任务状态，code: 0 表示完成，key 为文件 key
 */
export function checkLocalCompressStatus(archiveKey: string): { code: number, key?: string, desc?: string, error?: string } {
  try {
    console.log('检查压缩文件状态, archiveKey:', archiveKey)
    // archiveKey 格式为 compressed/filename.zip
    // 需要转换为本地路径
    const fileName = archiveKey.replace('compressed/', '')
    const localPath = path.join(filesCompressedDir, fileName)
    console.log('压缩文件本地路径:', localPath)
    console.log('文件是否存在:', fs.existsSync(localPath))
    
    if (fs.existsSync(localPath)) {
      const stats = fs.statSync(localPath)
      console.log('压缩文件大小:', stats.size)
      return {
        code: 0,
        key: archiveKey,
      }
    }
    else {
      console.error('压缩文件不存在:', localPath)
      return {
        code: 1,
        error: '压缩文件不存在',
      }
    }
  }
  catch (error) {
    console.error('检查压缩文件状态失败:', error)
    return {
      code: 3,
      error: `检查压缩文件状态失败: ${error}`,
    }
  }
}

/**
 * 获取压缩文件信息
 * @param archiveKey 压缩文件 key，如 compressed/filename.zip
 * @returns 文件信息
 */
export function getCompressedFileInfo(archiveKey: string): LocalFileInfo | null {
  try {
    const fileName = archiveKey.replace('compressed/', '')
    const localPath = path.join(filesCompressedDir, fileName)
    
    if (!fs.existsSync(localPath)) {
      return null
    }

    const stats = fs.statSync(localPath)
    const ext = path.extname(localPath).toLowerCase()
    const mimeType = getMimeType(ext)

    return {
      key: archiveKey,
      hash: '',
      fsize: stats.size,
      mimeType,
      putTime: Math.floor(stats.mtimeMs / 1000),
      type: 0,
      status: 0,
      md5: '',
    }
  }
  catch (error) {
    console.error('获取压缩文件信息失败:', error)
    return null
  }
}

/**
 * 获取临时文件路径
 * @param filename 文件名
 * @returns 临时文件路径
 */
export function getTempPath(filename: string): string {
  return path.join(filesTempDir, filename)
}

// 定期清理过期 token（每小时清理一次）
setInterval(() => {
  cleanExpiredTokens()
}, 3600000)

