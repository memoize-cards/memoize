import css from '@standard/css'

const style = css`
  .avatar {
    aspect-ratio: 1 / 1;
    background-color: var(--color-pure-white);
    border-radius: var(--border-radius-circular);
    height: 40px;
    width: 40px;
  }

  .avatar[small] {
    height: 24px;
    width: 24px;
  }

  .avatar[large] {
    height: 64px;
    width: 64px;
  }
`

export default style
