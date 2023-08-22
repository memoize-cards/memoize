import align from './align'
import content from './content'
import direction from './direction'
import gap from './gap'
import invertAlign from './invertAlign'
import invertContent from './invertContent'
import styled from '@standard/styled'
import tall from './tall'
import wide from './wide'

const stack = new Proxy({}, {
  get (_target, key) {
    return styled[key]`
      ${invertAlign}: ${align};
      display: flex;
      flex-direction: ${direction};
      gap: ${gap};
      height: ${tall};
      ${invertContent}: ${content};
      width: ${wide};
    `
  }
})

export default stack
