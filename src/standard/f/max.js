import arity from './arity'
import curry from './curry'
import magic from '@standard/magic'
import resolveDunders from './internal/resolveDunders'

function max (...args) {
  return Math.max(...args)
}

Object.assign(max, {
  __: magic.max
})

export default curry(arity(2, resolveDunders(max)))
