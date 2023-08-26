import css from '@standard/css'

const style = css`
  .textarea__container {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-nano);
    position: relative;
    width: 100%;
  }

  .textarea {
    appearance: none;
    background-color: transparent;
    border: var(--border-width-hairline) solid var(--color-master);
    border-radius: var(--border-radius-sm);
    color: var(--color-master-dark);
    font-family: var(--font-family-base);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-regular);
    height: 128px;
    line-height: var(--line-height-default);
    padding: var(--spacing_inset-xs);
    resize: none;
    width: 100%;
  }

  .textarea:active,
  .textarea:focus,
  .textarea:hover {
    outline: 0;
  }

  .textarea:-webkit-autofill,
  .textarea:-webkit-autofill:hover, 
  .textarea:-webkit-autofill:focus, 
  .textarea:-webkit-autofill:active {
    transition: background-color 9999999999s ease-in-out 0s
  }

  .textarea::placeholder {
    color: var(--color-master);
  }
`

export default style
