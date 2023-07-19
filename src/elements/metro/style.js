import css from '@standard/css'

const style = css`
  .metro {
    display: flex;
    -ms-overflow-style: none;
    overflow-x: auto;
    scrollbar-width: none;
    width: 100%;
  }

  @media (width >= 448px) {
    .metro {
      overflow-x: hidden;
    }
  }

  .metro::-webkit-scrollbar {
    display: none;
  }

  .metro__container {
    display: flex;
    gap: var(--spacing_inset-xs);
    min-width: 100%;
    text-align: inherit;
    transition: transform .618s ease-out;
    white-space: nowrap;
  }
`

export default style
