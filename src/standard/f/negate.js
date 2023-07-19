import curry from './curry'
import magic from '@standard/magic'
import resolveDunders from './internal/resolveDunders'

/**
 * Negates the given number by multiplying it by -1.
 *
 * @param {number} x - The number to negate.
 * @returns {number} The negated number.
 */
function negate (x) {
  return x * -1
}

Object.assign(negate, {
  __: magic.negate
})

export default curry(resolveDunders(negate))
