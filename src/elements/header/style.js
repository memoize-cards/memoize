import css from '@standard/css'

const style = css`
  .header {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-nano);
    height: 48.8px;
    justify-content: center;
  }

  @media (width >= 448px) {
    .header {
      padding-right: 113.59px;
    }
  }

  .header span {
    align-items: center;
    display: inline-flex;
    gap: var(--spacing_inset-nano);
  }
`

export default style
