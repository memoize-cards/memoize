import css from '@standard/css'

const style = css`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  body {
    background-color: var(--color-master-lightest);
  }

  ul {
    list-style: none;
  }

  m-markdown {
    overflow-x: hidden;
    width: 100%;
  }
`

export default style