import css from '@standard/css'

const style = css`
  .footer__feedback {
    display: grid;
    gap: var(--spacing_inset-nano);
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }

  @media (width >= 769px) {
    .footer__feedback {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`

export default style
