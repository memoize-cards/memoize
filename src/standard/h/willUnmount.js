import magic from '@standard/magic'
import willMount, { hook as _hook } from './willMount'

/**
 * The magic constant representing the "willUnmount" event.
 *
 * @type {string}
 */
const event = magic.willUnmount

/**
 * The "willUnmount" lifecycle hook bound to the "willMount" event.
 *
 * @param {Object} _target - The class prototype or object.
 * @param {string} _prop - The name of the method being decorated.
 * @param {Object} descriptor - The property descriptor of the method.
 */
const willUnmount = willMount.bind({ event })

/**
 * The utility function "hook" bound to the "willMount" event.
 *
 * @param {Object} target - The class prototype or object.
 * @param {string} prop - The name of the method to add the hook to.
 */
const hook = _hook.bind({ event })

export default willUnmount
export {
  hook
}
