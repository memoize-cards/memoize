import magic from '@standard/magic'

/**
 * Creates a new Proxy object that intercepts method calls and adds event handling.
 *
 * @param {Object} target - The target object that will be used as the base for the Proxy.
 * @returns {EventProxy} The resulting Proxy object with event handling.
 */
const event = new Proxy({}, {
  /**
   * Intercepts method calls on the Proxy object and adds event handling.
   *
   * @param {Object} _target - The Proxy object.
   * @param {string} event - The event (method name) being intercepted.
   * @param {Object} descriptor - The method's property descriptor.
   * @returns {Function} The new function that adds event handling to the target method.
   */
  get (_target, event) {
    /**
     * Adds event handling to the target method.
     *
     * @param {Function} functionRef - The event handling function to be added.
     * @param {Object} target - The target object of the method.
     */
    return function (functionRef, target) {
      const method = target[magic[event]] ?? function () { return undefined }
      Reflect.defineProperty(target, magic[event], {
        /**
         * A method that calls the original method and the event handling function.
         *
         * @param {...any} arguments - Arguments passed to the original method.
         */
        value () {
          Reflect.apply(method, this, arguments)
          functionRef(...arguments)
        },
        writable: true
      })
    }
  }
})

export default event
