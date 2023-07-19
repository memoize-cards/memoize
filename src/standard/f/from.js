/**
 * Creates a pipeline for chaining multiple operations on a value object.
 *
 * @param {any} value - The value object to apply the pipeline operations on.
 * @returns {Object} The pipeline object.
 */
export default (value) => (
  {
    /**
     * Marks the end of the pipeline and returns the value object.
     *
     * @returns {any} The value object.
     */
    done: () => value,

    /**
     * Chains a functionRef function to the pipeline and applies it to the value object.
     *
     * @param {Function} functionRef - The functionRef function to apply to the value object.
     * @returns {Object} The pipeline object.
     */
    pipe (functionRef) {
      value = functionRef(value)
      return this
    }
  }
)
