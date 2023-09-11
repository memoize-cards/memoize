import css from '@standard/css'

const style = css`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: var(--color-master-lightest);
  }

  m-markdown {
    overflow-x: hidden;
    width: 100%;
  }
`

export default style
