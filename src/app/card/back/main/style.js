import css from '@standard/css'

const style = css`
  .main {
    margin: 0 auto;
    max-width: 425px;
    padding: var(--spacing_inset-xs);
    width: 100%;
  }

  .main__content {
    align-items: start;
    background-color: var(--color-pure-white);
    border-radius: var(--border-radius-sm);
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
    min-height: calc(100svh - 266px);
    padding: var(--spacing_inset-xs);
    width: 100%;
  }
`

export default style
