/**
 * Function for overloading methods in an object or class prototype.
 *
 * @param {...string} args - The names of the methods to be overloaded.
 * @returns {Function} A decorator function that can be applied to the target object or class.
 */
function overload (...args) {
  return function (target, method) {
    args.forEach((prop) => (
      Reflect.defineProperty(target, prop, {
        /**
         * Executes the original method with the provided arguments.
         *
         * @returns {*} The result of executing the original method.
         */
        value () {
          return this[method](...arguments)
        },
        writable: true
      })
    ))
  }
}

export default overload
