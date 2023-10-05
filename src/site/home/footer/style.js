import css from '@standard/css'

const style = css`
  .footer {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
    height: calc(100svh - 180px);
    justify-content: end;
    position: absolute;
    right: 16px;
    top: 16px;
    width: 42px;
  }
`

export default style
