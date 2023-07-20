/**
 * Group array elements based on the result of a provided function.
 *
 * @param {function} functionRef - The function that will be called for each element in the array.
 * @param {any} [thisRef] - The context to which the `functionRef` will be bound when called.
 * @returns {Object} - An object with groups where each key represents the result of `functionRef` and the value is an array of elements belonging to that group.
 */
Reflect.defineProperty(Array.prototype, 'group', {
  value (functionRef, thisRef) {
    const evaluate = (reducer, object) => (
      (reducer[functionRef.call(thisRef, object)] ??= []).push(object),
      reducer
    )
    return this.reduce(evaluate, {})
  }
})
