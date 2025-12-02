export interface CodeMsg {
  code: number
  msg: string
}
export function codeMsg(code: number, msg: string): CodeMsg {
  return {
    code,
    msg
  }
}

export const uploadFileDir = `${process.cwd()}/upload`

// 本地文件存储路径
export const filesManageDir = `${process.cwd()}/files-manage`
export const filesUploadDir = `${filesManageDir}/uploads`
export const filesThumbnailsDir = `${filesManageDir}/thumbnails`
export const filesCompressedDir = `${filesManageDir}/compressed`
export const filesTempDir = `${filesManageDir}/temp`

export const UserConfigLabels = {
  mysql: {
    host: '主机地址',
    port: '端口号',
    database: '数据库名',
    user: '用户名',
    password: '密码'
  },
  qiniu: {
    accessKey: 'AccessKey',
    secretKey: 'SecretKey',
    bucketName: '存储空间名',
    bucketDomain: '绑定的域名',
    imageCoverStyle: '图片封面压缩样式',
    imagePreviewStyle: '图片预览压缩样式',
    bucketZone: '存储空间区域'
  },
  mongo: {
    host: '主机地址',
    port: '端口号',
    database: '数据库名',
    user: '用户名',
    password: '密码',
    auth: '是否需要鉴权',
    uri: '连接字符串',
  },
  redis: {
    host: '主机地址',
    port: '端口号',
    password: '连接密码',
    auth: '需要鉴权',
  },
  mail: {
    smtpHost: 'SMTP 地址',
    smtpPort: '端口号',
    useSSL: '启用 SSL',
    account: '发信账号',
    password: '授权码/密码',
    from: '发信邮箱',
     senderName: '发信人名称',
    subject: '默认主题',
    template: '邮件模板'
  }
}

export const LocalEnvMap = {
  mysql: {
    host: 'MYSQL_DB_HOST',
    port: 'MYSQL_DB_PORT',
    database: 'MYSQL_DB_NAME',
    user: 'MYSQL_DB_USER',
    password: 'MYSQL_DB_PWD'
  },
  mongo: {
    host: 'MONGO_DB_HOST',
    port: 'MONGO_DB_PORT',
    database: 'MONGO_DB_NAME',
    user: 'MONGO_DB_USER',
    password: 'MONGO_DB_PWD',
    auth: 'MONGO_DB_NEED_AUTH'
  },
  redis: {
    host: 'REDIS_DB_HOST',
    port: 'REDIS_DB_PORT',
    password: 'REDIS_DB_PASSWORD',
    auth: 'REDIS_DB_NEED_AUTH'
  },
  qiniu: {
    accessKey: 'QINIU_ACCESS_KEY',
    secretKey: 'QINIU_SECRET_KEY',
    bucketName: 'QINIU_BUCKET_NAME',
    bucketDomain: 'QINIU_BUCKET_DOMAIN',
    imageCoverStyle: 'QINIU_BUCKET_IMAGE_COVER_STYLE',
    imagePreviewStyle: 'QINIU_BUCKET_IMAGE_PREVIEW_STYLE',
    bucketZone: 'QINIU_BUCKET_ZONE'
  }
}
