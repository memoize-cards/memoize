import css from '@standard/css'

const style = css`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :where(h1, h2, h3, h4, h5, h6) {
    line-height: var(--line-height-sm) !important;
  }

  a {
    text-decoration: none;
  }

  body {
    background-color: var(--color-master-lightest);
  }
`

export default style
