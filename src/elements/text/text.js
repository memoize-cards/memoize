import align from './align'
import color from './color'
import family from './family'
import size from './size'
import styled from '@standard/styled'
import weight from './weight'

/**
 * A Proxy object that returns styled text components with dynamic styles based on the properties accessed.
 *
 * @type {Proxy}
 */
const text = new Proxy({}, {
  /**
   * Getter function for the Proxy object.
   *
   * @param {Object} _target - The target object.
   * @param {string} key - The property being accessed.
   * @returns {function} - A styled text component with dynamic styles based on the accessed property.
   */
  get (_target, key) {
    return styled[key]`
      color: ${color};
      font-family: ${family};
      font-size: ${size};
      font-weight: ${weight};
      line-height: 1.2;
      text-align: ${align};
    `
  }
})

export default text
