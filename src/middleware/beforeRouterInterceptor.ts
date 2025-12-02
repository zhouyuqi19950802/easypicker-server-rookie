import { Middleware } from 'flash-wolves'
import { addRequestLog } from '@/db/logDb'

const interceptor: Middleware = async (req, res) => {
  // 如果请求已被中间件处理，跳过路由匹配
  if ((req as any)._handled) {
    // 清除路由信息，阻止框架执行控制器
    ;(req as any).route = null
    return
  }
  
  addRequestLog(req, res)
}
export default interceptor
