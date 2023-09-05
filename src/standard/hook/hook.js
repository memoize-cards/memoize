import echo from '@standard/echo'
import middleware from '@standard/middleware'

const hook = new Proxy(
  middleware(async function (args, next) {
    const target = await next(...args)
    echo.on('$hook', ({ method, args }) => target[method]?.(...args))
    return target
  }),
  {
    get (_target, method) {
      return function (...args) {
        echo.emit('$hook', { method, args })
        return hook
      }
    }
  }
)

export default hook
