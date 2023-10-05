import css from '@standard/css'

const style = css`
  .hero {
    align-items: start;
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-md);
    height: calc(100svh - 180px);
    justify-content: end;
    width: calc(100% - 42px);
  }

  .hero__illustration {
    aspect-ratio: 1 / 1;
    margin: 0 auto;
    max-height: 550px;
    width: 100%;
  }

  .hero__hgroup {
    max-width: 327px;
  }
`

export default style
