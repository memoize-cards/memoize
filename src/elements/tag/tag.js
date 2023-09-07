import background from './background'
import border from './border'
import color from './color'
import styled from '@standard/styled'

const tag = styled.span`
  align-items: center;
  background-color: ${background};
  border: var(--border-width-hairline) solid ${border};
  border-radius: var(--border-radius-pill);
  color: ${color};
  cursor: pointer;
  display: flex;
  font-family: var(--font-family-base);
  font-size: var(--font-size-xxs);
  font-weight: var(--font-weight-medium);
  gap: var(--spacing_inset-nano);
  height: 30px;
  justify-content: center;
  line-height: var(--line-height-default);
  padding: var(--spacing_inset-quarck) var(--spacing_inset-xs);
  width: auto;
`

export default tag
