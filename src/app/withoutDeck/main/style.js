import css from '@standard/css'

const style = css`
  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    max-width: 425px;
    padding: var(--spacing_inset-xs);
    width: 100%;
  }

  .main__illustration {
    aspect-ratio: 1 / 1;
    margin: 0 auto;
    max-height: 550px;
    width: 100%;
  }
`

export default style
