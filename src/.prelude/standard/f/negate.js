import curry from './curry'
import magic from '@standard/magic'
import resolveDunders from './internal/resolveDunders'

function negate (x) {
  return x * -1
}

Object.assign(negate, {
  __: magic.negate
})

export default curry(resolveDunders(negate))
