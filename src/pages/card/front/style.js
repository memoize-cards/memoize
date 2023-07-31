import css from '@standard/css'

const style = css`
  .front {
    color: var(--color-master-dark);
    cursor: text;
    font-family: var(--font-family-base);
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-sm);
    outline: none;
    padding: var(--spacing_inset-nano);
  }

  .front:empty::before {
    color: var(--color-master-light);
    content: 'Front here';
    display: block;
  }
`

export default style
