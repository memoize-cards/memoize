import echo from '@standard/echo'
import middleware from '@standard/middleware'

const hook = new Proxy(
  middleware(function (target) {
    echo.on('$hook', ({ method, args }) => target[method]?.(...args))
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
