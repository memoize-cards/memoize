import magic from '@standard/magic'
import paint from './paint'

/**
 * Decorator function to add a "didMount" hook to a method.
 *
 * @param {Object} _target - The target object.
 * @param {string} _prop - The property name.
 * @param {Object} descriptor - The property descriptor.
 */
function didMount (_target, _prop, descriptor) {
  const event = (this?.event ?? magic.didMount)
  const next = descriptor.value

  Object.assign(descriptor, {
    /**
     * Modified method that adds a "didMount" hook.
     *
     * @returns {*} The result of calling the original method.
     */
    value () {
      setImmediate(() => this[paint.instance]?.()?.[event]?.())
      return Reflect.apply(next, this, arguments)
    },
    writable: true
  })
}

/**
 * Helper function to add a "didMount" hook to a target.
 *
 * @param {Object} target - The target object.
 * @param {string} prop - The property name to add the hook.
 */
function hook (target, prop) {
  const event = (this?.event ?? magic.didMount)

  Reflect.defineProperty(target, event, {
    /**
     * "didMount" hook that calls the specified property method.
     *
     * @returns {Object} The target object.
     */
    value () {
      return this[prop](), this
    },
    writable: true
  })
}

export default didMount
export {
  hook
}
