import align from './align'
import color from './color'
import family from './family'
import size from './size'
import styled from '@standard/styled'
import weight from './weight'

const text = new Proxy({}, {
  get (_target, key) {
    return styled[key]`
      color: ${color};
      font-family: ${family};
      font-size: ${size};
      font-weight: ${weight};
      line-height: var(--line-height-lg);
      text-align: ${align};
    `
  }
})

export default text
