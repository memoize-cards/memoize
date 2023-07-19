import arity from './arity'
import curry from './curry'
import magic from '@standard/magic'
import resolveDunders from './internal/resolveDunders'

/**
 * Multiplies all the given numbers together.
 *
 * @param {...number} args - The numbers to multiply.
 * @returns {number} The product of the numbers.
 */
function multiply (...args) {
  return args.reduce((x, y) => (x * y))
}

Object.assign(multiply, {
  __: magic.multiply
})

export default curry(arity(2, resolveDunders(multiply)))
