import css from '@standard/css'

const style = css`
  .footer {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
    margin: 0 auto;
    max-width: 425px;
    padding: var(--spacing_inset-xs);
    width: 100%;
  }

  .footer__feedback {
    display: grid;
    gap: var(--spacing_inset-nano);
    grid-template-columns: 1fr 1fr;
  }
`

export default style
