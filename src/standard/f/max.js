import arity from './arity'
import curry from './curry'
import magic from '@standard/magic'
import resolveDunders from './internal/resolveDunders'

/**
 * Finds the maximum value among the given arguments.
 *
 * @param {...number} args - The numbers to compare.
 * @returns {number} The maximum value.
 */
function max (...args) {
  return Math.max(...args)
}

Object.assign(max, {
  __: magic.max
})

export default curry(arity(2, resolveDunders(max)))
