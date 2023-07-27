import arity from './arity'
import curry from './curry'
import magic from '@standard/magic'
import resolveDunders from './internal/resolveDunders'

/**
 * Function that checks if two values are equal using strict equality (===).
 *
 * @function
 * @memberof module:@standard/equals
 * @param {*} x - The first value to be compared.
 * @param {*} y - The second value to be compared.
 * @returns {boolean} Returns `true` if the values are equal, otherwise `false`.
 */
function equals (x, y) {
  return x === y
}

/**
 * A special property of the equals function that allows using magic placeholders.
 *
 * @name __
 * @type {Object}
 * @memberof module:@standard/equals
 * @property {Function} equals - The magic function for equals.
 * @example
 * equals(42, __); // Returns a function that checks if the argument is equal to 42.
 */
Object.assign(equals, {
  __: magic.equals
})

export default curry(arity(2, resolveDunders(equals)))
