import css from '@standard/css'
import poster from './poster.svg'

const style = css`
  .thumbnail {
    border-radius: var(--border-radius-sm);
  }

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

  .thumbnail__discipline {
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    overflow: hidden;
    white-space: pre-wrap;
  }
`

export default style
