import { setGlobal } from '@standard/global'
import interceptor from '@standard/interceptor'

const global = interceptor(function (args, next) {
  setImmediate(() => {
    setGlobal({
      id: this.id,
      front: this.front,
      back: this.back,
      type: this.type
    })
  })
  return next(...args)
})

export default global
