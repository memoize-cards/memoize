import arity from './arity'
import curry from './curry'
import magic from '@standard/magic'
import resolveDunders from './internal/resolveDunders'

function zip (x, y) {
  const n = Math.max(x.length, y.length)
  return Array(n).fill(undefined).map((_, i) => [x[i], y[i]])
}

Object.assign(zip, {
  __: magic.zip
})

export default curry(arity(2, resolveDunders(zip)))
