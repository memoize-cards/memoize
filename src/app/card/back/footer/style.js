import css from '@standard/css'

const style = css`
  .footer {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
    margin: 0 auto;
    width: 100%;
  }

  .footer__feedback {
    display: grid;
    gap: var(--spacing_inset-nano);
    grid-template-columns: 1fr 1fr;
  }

  @media (width >= 769px) {
    .footer__feedback {
      display: flex;
    }

    .footer__feedback button:nth-of-type(2) {
      order: 1;
    }

    .footer__feedback button:nth-of-type(4) {
      order: 2;
    }
  }
`

export default style
