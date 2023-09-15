import { setGlobal } from '@standard/global'
import interceptor from '@standard/interceptor'

const global = interceptor(function (args, next) {
  const output = next(...args)
  setGlobal({
    id: this.id,
    name: this.name,
    description: this.description
  })
  return output
})

export default global
