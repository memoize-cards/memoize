/**
 * Overrides a function or method with a new implementation.
 *
 * @param {object} target - The target object or class prototype.
 * @param {string} prop - The name of the property to override.
 * @param {function} functionRef - The new implementation to be used.
 * @returns {void}
 */
function override (target, prop, functionRef) {
  const next = target[prop] ?? function () { return undefined }
  Reflect.defineProperty(target, prop, {
    value () {
      return Reflect.apply(functionRef, this, [arguments, next.bind(this)])
    },
    writable: true
  })
}

export default override
