import params from './params'

function extractParams (path) {
  const keys = path?.split('/')
  const values = location.pathname.split('/')
  keys?.forEach((key, i) => /^:/.test(key) && Reflect.set(params, key.slice(1), values[i]))
}

export default extractParams
