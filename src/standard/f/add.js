import arity from './arity'
import curry from './curry'
import magic from '@standard/magic'
import resolveDunders from './internal/resolveDunders'

function add (...args) {
  return args.reduce((x, y) => (x + y))
}

Object.assign(add, {
  __: magic.add
})

export default curry(arity(2, resolveDunders(add)))
