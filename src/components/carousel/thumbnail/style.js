import css from '@standard/css'
import poster from './poster.svg'

const style = css`
  .thumbnail {
    border-radius: var(--border-radius-sm);
    position: relative;
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
    padding: var(--spacing_inset-xs) 40% var(--spacing_inset-xs) var(--spacing_inset-xs);
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

  .thumbnail__avatar {
    bottom: 0;
    height: 100%;
    max-height: 100%;
    object-fit: cover;
    position: absolute;
    right: var(--spacing_inset-xs);
    z-index: 1;
  }
`

export default style
