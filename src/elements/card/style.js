import css from '@standard/css'
import poster from './poster.svg'

const style = css`
  .card__poster {
    aspect-ratio: 1920 / 1080;
    background-image: url(${poster});
    background-repeat: no-repeat;
    border-radius: 8px;
    height: 166px;
    position: relative;
    width: 296px;
  }

  .card__poster::before {
    aspect-ratio: inherit;
    background: #479ED3;
    border-radius: inherit;
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    z-index: -1;
  }
`

export default style
