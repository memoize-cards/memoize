import arity from './arity'
import curry from './curry'
import magic from '@standard/magic'
import resolveDunders from './internal/resolveDunders'

function inc (value) {
  return ++value
}

Object.assign(inc, {
  __: magic.inc
})

export default curry(arity(1, resolveDunders(inc)))
