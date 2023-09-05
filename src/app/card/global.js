import { setGlobal } from '@standard/global'
import interceptor from '@standard/interceptor'

const global = interceptor(function (args, next) {
  const output = next(...args)
  setGlobal({
    id: this.id,
    front: this.front,
    back: this.back,
    type: this.type
  })
  return output
})

export default global
