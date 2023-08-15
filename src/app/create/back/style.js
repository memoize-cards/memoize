import css from '@standard/css'

const style = css`
  .back {
    color: var(--color-master-dark);
    cursor: text;
    font-family: var(--font-family-base);
    font-size: var(--font-size-xxs);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-lg);
    outline: none;
    padding: var(--spacing_inset-nano);
  }

  .back:empty::before {
    color: var(--color-master-light);
    content: 'Write the back here...';
    display: block;
  }
`

export default style
