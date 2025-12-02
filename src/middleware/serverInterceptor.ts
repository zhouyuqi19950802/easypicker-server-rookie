import { Middleware } from 'flash-wolves'
import formidable from 'formidable'
import { existsSync, mkdirSync } from 'fs'
import { uploadFileDir } from '@/constants'
import { getClientIp } from '@/db/logDb'
import { getUserInfo } from '@/utils/userUtil'
import { ObjectID } from 'mongodb'
import { findAction } from '@/db/actionDb'
import type { DownloadActionData } from '@/db/model/action'
import { verifyDownloadToken, keyToLocalPath } from '@/utils/localFileUtil'
import fs from 'node:fs'
import path from 'node:path'

// 允许跨域访问的源
const allowOrigins = [
  'http://localhost:8080',
  'https://ep2.sugarat.top',
  'https://ep2.dev.sugarat.top'
]

if (!existsSync(uploadFileDir)) {
  mkdirSync(uploadFileDir)
}

const interceptor: Middleware = async (req, res) => {
  // 开启CORS
  const { method } = req
  req.startTime = Date.now()
  
  // 添加下载请求日志
  if (req.url?.includes('/file/download/')) {
    console.log('=== 中间件收到下载请求 ===')
    console.log('URL:', req.url)
    console.log('Method:', method)
  }
  
  if (allowOrigins.includes(req.headers.origin)) {
    // 允许跨域
  }
  
  // 文件上传和下载请求不设置 Content-Type，让控制器处理
  if (req.url?.includes('/file/upload') || req.url?.includes('/file/download/')) {
    // 不设置 Content-Type，让控制器处理
  } else {
    // 设置响应头
    res.setHeader('Content-Type', 'application/json;charset=utf-8')
  }
  // 对预检请求放行
  if (method === 'OPTIONS') {
    res.statusCode = 204
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', '*')
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    res.end()
    return
  }

  // 文件下载由控制器处理，不在中间件中处理

  // 处理文件上传 - 在中间件中直接处理，避免框架消费请求流
  if (req.url === '/file/upload' && method === 'POST') {
    console.log('=== 中间件拦截文件上传请求 ===')
    const { filesTempDir } = await import('@/constants')
    const form = formidable({
      multiples: false,
      keepExtensions: true,
      maxFileSize: 1024 * 1024 * 1024 * 5, // 5GB
      uploadDir: filesTempDir,
    })

    const p = new Promise((resolve, reject) => {
      form.parse(req, async (err, fields, files) => {
        if (err) {
          console.error('文件上传解析错误:', err)
          res.writeHead(500, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ code: 500, msg: `文件上传失败: ${err.message}` }))
          reject(err)
          return
        }

        const file = Array.isArray(files.file) ? files.file[0] : files.file
        if (!file) {
          console.error('未找到上传文件, files:', files)
          res.writeHead(400, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ code: 400, msg: '未找到上传文件' }))
          reject(new Error('未找到上传文件'))
          return
        }

        try {
          const key = Array.isArray(fields.key) ? fields.key[0] : fields.key
          if (!key || typeof key !== 'string') {
            console.error('缺少文件 key 参数, fields:', fields)
            res.writeHead(400, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ code: 400, msg: '缺少文件 key 参数' }))
            reject(new Error('缺少文件 key 参数'))
            return
          }

          console.log('开始保存文件, key:', key, 'filepath:', file.filepath, 'size:', file.size)

          // 直接使用工具函数保存文件
          const { keyToLocalPath, ensureDir, getFileInfo, getThumbnailPath, getPreviewPath } = await import('@/utils/localFileUtil')
          const fs = await import('node:fs')
          const path = await import('node:path')
          const sharp = await import('sharp')
          
          const localPath = keyToLocalPath(key)
          ensureDir(path.dirname(localPath))
          
          // 确保源文件存在
          if (!fs.existsSync(file.filepath)) {
            console.error('源文件不存在:', file.filepath)
            res.writeHead(500, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ code: 500, msg: '源文件不存在' }))
            reject(new Error('源文件不存在'))
            return
          }

          // 复制文件
          fs.copyFileSync(file.filepath, localPath)
          
          // 验证文件是否成功保存
          if (!fs.existsSync(localPath)) {
            console.error('文件保存后验证失败:', localPath)
            res.writeHead(500, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ code: 500, msg: '文件保存失败' }))
            reject(new Error('文件保存失败'))
            return
          }

          console.log('文件保存成功, key:', key, 'size:', fs.statSync(localPath).size)

          // 如果是图片，生成缩略图和预览图
          const info = getFileInfo(localPath)
          if (info && info.mimeType.includes('image')) {
            try {
              const thumbnailPath = getThumbnailPath(key)
              ensureDir(path.dirname(thumbnailPath))
              await sharp.default(localPath)
                .resize(200, 200, {
                  fit: 'cover',
                  position: 'center',
                })
                .jpeg({ quality: 80 })
                .toFile(thumbnailPath)

              const previewPath = getPreviewPath(key)
              ensureDir(path.dirname(previewPath))
              await sharp.default(localPath)
                .resize(1200, 1200, {
                  fit: 'inside',
                  withoutEnlargement: true,
                })
                .jpeg({ quality: 85 })
                .toFile(previewPath)
            }
            catch (error) {
              console.error('生成图片缩略图失败:', error)
            }
          }

          // 删除临时文件
          try {
            const fs = await import('node:fs')
            fs.unlinkSync(file.filepath)
          }
          catch {
            // 忽略删除临时文件错误
          }

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
          res.writeHead(200, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify(result))
          resolve(result)
        }
        catch (error) {
          console.error('文件上传异常:', error)
          res.writeHead(500, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ code: 500, msg: `文件上传失败: ${error}` }))
          reject(error)
        }
      })

      form.on('error', (err) => {
        console.error('formidable 错误:', err)
        res.writeHead(500, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ code: 500, msg: `文件上传失败: ${err.message}` }))
        reject(err)
      })
    })

    try {
      await p
    }
    catch (error) {
      // 错误已在 Promise 中处理
    }
    return // 阻止继续执行后续中间件
  }

  // 处理文件上传
  // 单独抽离文件上传API
  if (req.url === '/public/upload') {
    const form = formidable({
      multiples: true,
      uploadDir: uploadFileDir,
      keepExtensions: true
    })
    const p = new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) {
          reject(err)
        }
        res.writeHead(200, { 'Content-Type': 'application/json' })
        const data = {
          name: files.file.newFilename,
          size: files.file.size,
          type: files.file.mimetype
        }
        res.end(JSON.stringify({ code: 0, data, msg: 'ok' }, null, 2))
        resolve('ok')
      })
    })
    try {
      await p
    } catch (error) {
      res.end(JSON.stringify({ code: 500, msg: error }))
    }
  }

  // 添加ip，供 @ReqIp 取用
  Object.defineProperty(req, '_ip', {
    value: getClientIp(req)
  })

  // 添加userInfo，供@ReqUserInfo
  Object.defineProperty(req, '_userinfo', {
    value: await getUserInfo(req)
  })
}
export default interceptor
