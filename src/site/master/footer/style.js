import css from '@standard/css'

const style = css`
  .footer {
    background-color: var(--color-pure-white);
    height: 74px;
    margin: 0 auto;
    width: 100%;
  }

  .footer__container {
    align-items: center;
    display: flex;
    gap: var(--spacing_inset-lg);
    height: inherit;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1440px;
    padding: var(--spacing_inset-xs);
  }

  .footer__benefit {
    display: flex;
  }

  @media (width <= 768px) {
    .footer__benefit:nth-child(4n+2) {
      display: none;
    }
  }

  @media (width >= 769px) {
    .footer__benefit {
      width: 50%;
    }
  }

  @media (width <= 1024px) {
    .footer__benefit:nth-child(4n+3) {
      display: none;
    }
  }

  @media (width >= 1025px) {
    .footer__benefit {
      width: 33.33%;
    }
  }

  @media (width <= 1440px) {
    .footer__benefit:nth-child(4n+4) {
      display: none;
    }
  }

  @media (width >= 1441px) {
    .footer__benefit {
      width: 25%;
    }
  }
`

export default style
