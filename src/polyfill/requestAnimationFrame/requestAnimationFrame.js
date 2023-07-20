/**
 * Polyfill for `requestAnimationFrame` function.
 * If `requestAnimationFrame` is not supported in the current environment,
 * this polyfill will use `setTimeout` with a delay of 0 as a fallback.
 *
 * @param {function} functionRef - The callback function to be executed.
 */
!('requestAnimationFrame' in window) && (
  Reflect.defineProperty(window, 'requestAnimationFrame', {
    value (functionRef) {
      setTimeout(functionRef, 0)
    }
  })
)
