import arity from './arity'
import curry from './curry'
import magic from '@standard/magic'
import resolveDunders from './internal/resolveDunders'

/**
 * Increments the given value by 1.
 *
 * @param {number} value - The value to be incremented.
 * @returns {number} The incremented value.
 */
function inc (value) {
  return ++value
}

/**
 * An object containing special properties related to the `inc` function.
 *
 * @property {Function} __ - The magic.inc function.
 */
Object.assign(inc, {
  __: magic.inc
})

export default curry(arity(1, resolveDunders(inc)))
