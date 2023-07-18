import css from '@standard/css'

const style = css`
  .metro {
    display: flex;
    -ms-overflow-style: none;
    overflow-x: auto;
    scrollbar-width: none;
    width: 100%;
  }

  .metro::-webkit-scrollbar {
    display: none;
  }

  .metro__container {
    display: flex;
    gap: 12px;
    min-width: 100%;
    text-align: inherit;
    white-space: nowrap;
  }
`

export default style
