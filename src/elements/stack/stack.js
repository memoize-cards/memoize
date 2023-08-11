import align from './align'
import content from './content'
import direction from './direction'
import gap from './gap'
import styled from '@standard/styled'

const stack = new Proxy({}, {
  get (_target, key) {
    return styled[key]`
      align-items: ${align};
      display: flex;
      flex-direction: ${direction};
      gap: ${gap};
      justify-content: ${content};
      width: 100%;
    `
  }
})

export default stack
