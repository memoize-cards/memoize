import arity from './arity'
import curry from './curry'
import magic from '@standard/magic'
import resolveDunders from './internal/resolveDunders'

function sub (...args) {
  return args.reduce((x, y) => (x - y))
}

Object.assign(sub, {
  __: magic.sub
})

export default curry(arity(2, resolveDunders(sub)))
