import css from '@standard/css'

const style = css`
  .language {
    align-items: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    height: 42px;
    justify-content: center;
    min-width: 42px;
    position: relative;
    width: 42px;
  }

  .language__select {
    appearance: none;
    background-color: transparent;
    border: none;
    color: transparent;
    cursor: pointer;
    height: 42px;
    left: 0;
    position: absolute;
    top: 0;
    width: 42px;
  }

  .language__select:focus {
    outline: none;
  }

  .language__option {
    color: var(--color-master-dark);
  }
`

export default style
