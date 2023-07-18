/**
 * Creates a middleware that wraps a class constructor and adds additional functionality.
 *
 * @param {Function} functionRef - The middleware function to be executed.
 * @returns {Function} The wrapped class constructor.
 */
function middleware (functionRef) {
  return function (ClassRef) {
    return new Proxy(
      /**
       * Creates a new instance of the class and executes the middleware function.
       *
       * @returns {ClassRef} The instance of the class.
       */
      function () {
        const instance = new ClassRef(...arguments)
        setImmediate(() => functionRef(instance))
        return instance
      },
      {
        /**
         * Retrieves the value of a property from the class constructor.
         *
         * @param {Object} _ - The target object.
         * @param {string | symbol} key - The property key.
         * @returns {*} The value of the property.
         */
        get: (_, key) => Reflect.get(ClassRef, key),

        /**
         * Sets the value of a property in the class constructor.
         *
         * @param {Object} _ - The target object.
         * @param {string | symbol} key - The property key.
         * @param {*} value - The value to be set.
         * @returns {boolean} A boolean indicating if the assignment was successful.
         */
        set: (_, key, value) => (Reflect.set(ClassRef, key, value), true)
      }
    )
  }
}

export default middleware
