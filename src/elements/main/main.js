import align from './align'
import content from './content'
import height from './height'
import styled from '@standard/styled'

const main = styled.main`
  align-items: ${align};
  display: flex;
  flex-direction: column;
  gap: var(--spacing_inset-giant);
  height: ${height};
  justify-content: ${content};
  margin: 0 auto;
  max-width: 425px;
  padding: var(--spacing_inset-xs);
  position: relative;
  width: 100%;
`

export default main
