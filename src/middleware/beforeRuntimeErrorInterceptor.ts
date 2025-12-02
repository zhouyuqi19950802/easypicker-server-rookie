import { RuntimeErrorInterceptor } from 'flash-wolves'
import { addErrorLog } from '@/db/logDb'

const interceptor: RuntimeErrorInterceptor = async (req, res, err) => {
  // 如果响应头已经发送，不处理错误（避免重复设置响应头）
  if (res.headersSent) {
    console.log('响应头已发送，忽略错误处理')
    return
  }
  
  // 如果请求已被中间件处理，忽略错误（避免重复设置响应头）
  if ((req as any)._handled) {
    return
  }
  
  addErrorLog(req, err.toString(), err.stack)
}
export default interceptor
