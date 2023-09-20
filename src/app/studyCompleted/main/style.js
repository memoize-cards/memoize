import css from '@standard/css'

const style = css`
  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    max-width: 425px;
    min-height: calc(100svh - 74px);
    padding: var(--spacing_inset-xs);
    width: 100%;
  }
`

export default style
