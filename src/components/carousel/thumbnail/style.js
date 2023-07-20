import css from '@standard/css'
import poster from './poster.svg'

const style = css`
  .thumbnail__poster {
    align-items: flex-start;
    aspect-ratio: 288 / 162;
    background-image: url(${poster});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: inherit;
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-nano);
    justify-content: center;
    padding: var(--spacing-xxxs) 40% var(--spacing-xxxs) var(--spacing-xxxs);
    position: relative;
    white-space: normal;
    width: 100%;
  }

  .thumbnail {
    background: #479ED3;
    border-radius: var(--border-radius-sm);
  }
`

export default style
