/**
 * Utility function that creates a conditional function to select a process based on the first matching condition.
 *
 * @function
 * @memberof module:@directive/cond
 * @param {...ConditionEntry} targets - A series of condition and process function pairs.
 * @returns {Function} A function that evaluates the conditions and executes the matching process function.
 */
function cond (...targets) {
  return (...args) => {
    const [, process] = targets.find(([can]) => can(...args))
    return process(...args)
  }
}

export default cond
