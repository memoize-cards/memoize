import css from '@standard/css'

const style = css`
  .hero {
    align-items: start;
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-md);
    height: calc(100svh - 180px);
    justify-content: end;
    max-width: 369px;
    width: calc(100% - 42px);
  }
`

export default style
