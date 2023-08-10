import align from './align'
import content from './content'
import direction from './direction'
import gap from './gap'
import styled from '@standard/styled'

/**
 * Creates a styled stack with flex layout properties.
 *
 * @param {Object} _target - The target object (not used in this context).
 * @param {string} key - The key representing the CSS property to set.
 * @returns {Function} A function to apply the specified flex layout property.
 */
const stack = new Proxy({}, {
  /**
   * Get the flex layout property and apply the corresponding styles.
   *
   * @param {Object} _target - The target object (not used in this context).
   * @param {string} key - The key representing the CSS property to set.
   * @returns {Function} A function to apply the specified flex layout property.
   */
  get (_target, key) {
    return styled[key]`
      align-items: ${align};
      display: flex;
      flex-direction: ${direction};
      gap: ${gap};
      justify-content: ${content};
    `
  }
})

export default stack
