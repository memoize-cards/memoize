import arity from './arity'
import curry from './curry'
import magic from '@standard/magic'
import resolveDunders from './internal/resolveDunders'

/**
 * Finds the minimum value among the given arguments.
 *
 * @param {...number} args - The numbers to compare.
 * @returns {number} The minimum value.
 */
function min (...args) {
  return Math.min(...args)
}

Object.assign(min, {
  __: magic.min
})

export default curry(arity(2, resolveDunders(min)))
