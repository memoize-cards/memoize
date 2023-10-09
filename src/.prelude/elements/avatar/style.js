import css from '@standard/css'

const style = css`
  .avatar {
    aspect-ratio: 1 / 1;
    background-color: var(--color-pure-white);
    border-radius: var(--border-radius-circular);
    height: 42px;
    min-height: 42px;
    min-width: 42px;
    width: 42px;
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
