/**
 * Polyfill for `setImmediate` function.
 * If `setImmediate` is not supported in the current environment,
 * this polyfill will use `setTimeout` with a delay of 0 as a fallback.
 *
 * @param {function} functionRef - The callback function to be executed.
 * @returns {number} - A timeout ID that can be used to cancel the execution.
 */
Reflect.defineProperty(window, 'setImmediate', {
  value (functionRef) {
    return setTimeout(functionRef, 0)
  }
})
