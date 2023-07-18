import css from '@standard/css'
import poster from './poster.svg'

const style = css`
  .card {
    min-width: 100%;
  }

  @media (width >= 444px) {
    .card {
      min-width: calc(50% - 6px);
    }
  }

  @media (width >= 744px) {
    .card {
      min-width: calc(33.33% - 8px);
    }
  }

  @media (width >= 1044px) {
    .card {
      min-width: calc(25% - 9px);
    }
  }

  .card__thumbnail {
    align-items: flex-start;
    aspect-ratio: 288 / 162;
    background-image: url(${poster});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: center;
    padding: 12px 40% 12px 12px;
    position: relative;
    width: 100%;
  }

  .card__thumbnail::before {
    background: #479ED3;
    border-radius: inherit;
    content: '';
    display: block;
    height: 100%;
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
