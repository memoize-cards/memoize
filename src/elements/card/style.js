import css from '@standard/css'
import poster from './poster.svg'

const style = css`
  .card__poster {
    align-items: flex-start;
    aspect-ratio: 288 / 162;
    background-image: url(${poster});
    background-repeat: no-repeat;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    height: 162px;
    justify-content: center;
    padding: 12px 40% 12px 12px;
    position: relative;
    width: 288px;
  }

  .card__poster::before {
    aspect-ratio: inherit;
    background: #479ED3;
    border-radius: inherit;
    content: '';
    display: block;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }
  
  .card__discipline {
    color: #fff;
    font-family: Inter, sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 20px;
    white-space: wrap;
  }

  .card__teacher {
    color: #fff;
    font-family: Inter, sans-serif;
    font-size: 12px;
    font-weight: 500;
    line-height: 14.4px;
    white-space: wrap;
  }
`

export default style
