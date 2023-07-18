import css from '@standard/css'

const style = css`
  .header {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-nano);
  }

  @media (width >= 448px) {
    .header {
      padding-right: calc(var(--spacing_inset-xs) + 96px);
    }
  }

  .header span {
    align-items: center;
    display: inline-flex;
    gap: var(--spacing_inset-nano);
  }
`

export default style
