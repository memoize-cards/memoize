import css from '@standard/css'

const style = css`
  .avatar {
    aspect-ratio: 1 / 1;
    background-color: var(--color-pure-white);
    border-radius: var(--border-radius-circular);
    height: 40px;
    min-height: 40px;
    min-width: 40px;
    width: 40px;
  }

  .avatar[small] {
    height: 24px;
    min-height: 24px;
    min-width: 24px;
    width: 24px;
  }

  .avatar[large] {
    height: 64px;
    min-height: 64px;
    min-width: 64px;
    width: 64px;
  }
`

export default style
