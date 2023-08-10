import arity from './arity'
import curry from './curry'
import magic from '@standard/magic'
import resolveDunders from './internal/resolveDunders'

function min (...args) {
  return Math.min(...args)
}

Object.assign(min, {
  __: magic.min
})

export default curry(arity(2, resolveDunders(min)))
