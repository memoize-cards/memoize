import css from '@standard/css'

const style = css`
  .pagination {
    align-items: center;
    display: none;
    gap: var(--spacing_inset-xs);
    position: absolute;
    right: 0;
    top: 0;
  }

  @media (width >= 448px) {
    .pagination {
      display: flex;
    }
  }

  .pagination__button {
    align-items: center;
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    height: 48.8px;
    justify-content: center;
    width: 48.8px;
  }
`

export default style
