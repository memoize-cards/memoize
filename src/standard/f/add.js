import arity from './arity'
import curry from './curry'
import magic from '@standard/magic'
import resolveDunders from './internal/resolveDunders'

/**
 * Adds multiple numbers together.
 *
 * @param {...number} args - The numbers to be added.
 * @returns {number} The sum of the numbers.
 *
 * @example
 * add(2, 3); // 5
 * add(1, 2, 3, 4, 5); // 15
 */
function add (...args) {
  return args.reduce((x, y) => (x + y))
}

Object.assign(add, {
  /**
   * Magic identifier for the add function.
   */
  __: magic.add
})

export default curry(arity(2, resolveDunders(add)))
