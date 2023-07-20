import magic from '@standard/magic'

/**
 * The repaint function is a decorator that wraps the original method of a class and schedules
 * a repaint operation using the 'requestAnimationFrame' function. It calls the 'repaint.reflow'
 * method of the class instance to trigger the repaint operation after the method is executed.
 *
 * @param {Object} _target - The target object, not used in this function.
 * @param {string} _prop - The property name, not used in this function.
 * @param {Object} descriptor - The method descriptor.
 */
function repaint (_target, _prop, descriptor) {
  const next = descriptor.value

  Object.assign(descriptor, {
    /**
     * The wrapped method that triggers the repaint operation after the original method is executed.
     *
     * @returns {*} The result of the original method call.
     */
    value () {
      requestAnimationFrame(() => this[repaint.reflow]?.())
      return Reflect.apply(next, this, arguments)
    }
  })
}

/**
 * Symbolic constant used for identifying the 'repaint.reflow' method of a class instance.
 */
Object.assign(repaint, {
  reflow: magic.repaint_reflow
})

export default repaint
