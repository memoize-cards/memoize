import magic from '@standard/magic'
import paint from './paint'

/**
 * A decorator function to add the "willMount" lifecycle hook to a method.
 * The "willMount" hook is executed before the component is mounted to the DOM.
 *
 * @param {Object} _target - The class prototype or object.
 * @param {string} _prop - The name of the method being decorated.
 * @param {Object} descriptor - The property descriptor of the method.
 */
function willMount (_target, _prop, descriptor) {
  const event = (this?.event ?? magic.willMount)
  const next = descriptor.value

  Object.assign(descriptor, {
    value () {
      this[paint.instance]?.()?.[event]?.()
      return Reflect.apply(next, this, arguments)
    },
    writable: true
  })
}

/**
 * A utility function to add the "willMount" lifecycle hook to a class method.
 *
 * @param {Object} target - The class prototype or object.
 * @param {string} prop - The name of the method to add the hook to.
 */
function hook (target, prop) {
  const event = (this?.event ?? magic.willMount)

  Reflect.defineProperty(target, event, {
    value () {
      return this[prop](), this
    },
    writable: true
  })
}

export default willMount
export {
  hook
}
