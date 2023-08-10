import magic from '@standard/magic'

/**
 * Creates a new Proxy object that intercepts method calls and adds asynchronous handling.
 *
 * @param {Object} target - The target object that will be used as the base for the Proxy.
 * @returns {DispatchProxy} The resulting Proxy object with asynchronous handling.
 */
const dispatch = new Proxy({}, {
  /**
   * Intercepts method calls on the Proxy object.
   *
   * @param {Object} _target - The Proxy object.
   * @param {string} event - The event (method name) being called.
   * @param {Object} descriptor - The method's property descriptor.
   * @returns {Function} The new function that includes the asynchronous handling.
   */
  get (_target, event) {
    /**
     * A function that includes asynchronous handling for the method.
     *
     * @param {...any} args - Arguments passed to the method.
     * @returns {*} The result of the original method call.
     */
    return function (_target, _prop, descriptor) {
      const method = descriptor.value
      Object.assign(descriptor, {
        value () {
          const output = Reflect.apply(method, this, arguments)
          setImmediate(() => this[magic[event]]?.(output))
          return output
        }
      })
    }
  }
})

export default dispatch
