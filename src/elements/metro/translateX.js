import { paint } from '@standard/h'
import interceptor from '@standard/interceptor'

const translateX = interceptor(function (args, next) {
  setImmediate(() => (
    this[paint.rootElement]().querySelector('div').style = `transform: translateX(${this.x}px)`
  ))
  return next(...args)
})

export default translateX
