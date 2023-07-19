/**
 * Decorator for intercepting method calls and executing custom logic before and after the method execution.
 *
 * @param {Function} functionRef - The function to be executed as an interceptor.
 * @returns {Function} The decorator function.
 */
function interceptor (functionRef) {
  return function (_target, _prop, descriptor) {
    const next = descriptor.value
    Object.assign(descriptor, {
      value () {
        return Reflect.apply(functionRef, this, [arguments, next.bind(this)])
      }
    })
  }
}

export default interceptor
