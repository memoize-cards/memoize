import styled from '@standard/styled'

const main = styled.main`
  align-items: ${(props) => props.tall ? 'center' : 'start'};
  display: flex;
  flex-direction: column;
  gap: var(--spacing_inset-giant);
  height: ${(props) => props.tall ? '100vh' : 'auto'};
  justify-content: ${(props) => props.tall ? 'center' : 'start'};
  margin: 0 auto;
  max-width: 425px;
  padding: var(--spacing_inset-xs);
  position: relative;
  width: 100%;
`

export default main
