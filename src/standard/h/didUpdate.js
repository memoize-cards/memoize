import didMount, { hook as _hook } from './didMount'
import magic from '@standard/magic'

/**
 * The event constant `magic.didUpdate`.
 *
 * @constant {string}
 */
const event = magic.didUpdate

/**
 * Binds the 'didMount' function with the 'event' property set to `magic.didUpdate`.
 *
 * @function
 * @param {...*} args - Arguments to be passed to the 'didMount' function.
 * @returns {*} The result of the 'didMount' function call.
 * @see module:didMount
 */
const didUpdate = didMount.bind({ event })

/**
 * Binds the 'hook' function with the 'event' property set to `magic.didUpdate`.
 *
 * @function
 * @param {object} target - The target object to define the property on.
 * @param {string} prop - The name of the property.
 * @returns {undefined}
 * @see module:didMount.hook
 */
const hook = _hook.bind({ event })

export default didUpdate
export {
  hook
}
