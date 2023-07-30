import align from './align'
import content from './content'
import direction from './direction'
import gap from './gap'
import styled from '@standard/styled'

/**
 * A proxy object to create a styled component with flexbox properties.
 *
 * @type {Object.<string, import('@standard/styled').StyledFunction>}
 */
const stack = new Proxy({}, {
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
