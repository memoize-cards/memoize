import css from '@standard/css'

const style = css`
  .logo {
    aspect-ratio: 1 / 1;
    cursor: pointer;
    object-fit: cover;
    width: 42px;
  }

  .logo[large] {
    width: 64px;
  }
`

export default style
