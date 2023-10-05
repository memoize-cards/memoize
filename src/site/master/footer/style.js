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
    height: inherit;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1440px;
    padding: var(--spacing_inset-xs);
  }
`

export default style
