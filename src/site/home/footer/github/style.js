import css from '@standard/css'
import media from './media.svg'

const style = css`
  .github {
    align-items: center;
    background: url(${media});
    background-color: transparent;
    background-position: center;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    display: flex;
    height: 42px;
    justify-content: center;
    overflow: hidden;
    text-indent: -9999px;
    width: 42px;
  }
`

export default style
