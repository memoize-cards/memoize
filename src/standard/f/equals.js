import arity from './arity'
import curry from './curry'
import magic from '@standard/magic'
import resolveDunders from './internal/resolveDunders'

function equals (x, y) {
  return x === y
}

Object.assign(equals, {
  __: magic.equals
})

export default curry(arity(2, resolveDunders(equals)))
