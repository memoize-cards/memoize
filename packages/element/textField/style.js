import { css } from "standard/dom";

function style() {
  return css`
    *,
    *::after,
    *::before {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      transition: all 0.2s ease-out;
    }

    :host {
      align-items: start;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: var(--spacing-sm);
      position: relative;
      width: var(--width-xxs);
    }

    label {
      color: var(--text-secondary);
      font-family: var(--font-family);
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-medium);
      line-height: var(--line-height-sm);
    }

    input__wrapper {
      position: relative;
      width: inherit;
    }

    input {
      appearance: none;
      background-color: var(--bg-primary);
      border: 1px solid var(--border-primary);
      border-radius: var(--radius-md);
      color: var(--text-primary);
      font-family: var(--font-family);
      font-size: var(--font-size-md);
      font-weight: var(--font-weight-regular);
      height: 44px;
      line-height: var(--line-height-md);
      padding: var(--spacing-md) var(--spacing-lg);
      width: 100%;
    }

    input[type="number"] {
      -moz-appearance: textfield;
    }

    input:active,
    input:hover {
      outline: 0;
    }

    input:focus {
      border-color: var(--border-brand);
      outline: 0;
    }

    input:disabled,
    input:read-only {
      background-color: var(--bg-secondary);
      border-color: var(--border-primary);
      box-shadow: none;
      color: var(--text-disabled);
    }

    .textFiedl::placeholder {
      color: var(--text-placeholder);
    }

    input::-webkit-autofill,
    input::-webkit-autofill:hover, 
    input::-webkit-autofill:focus, 
    input::-webkit-autofill:active {
      transition: background-color 9999999999s ease-in-out 0s
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    input__alert {
      align-items: center;
      color: var(--text-error-primary);
      display: none;
      height: 16px;
      justify-content: center;
      position: absolute;
      right: 14px;
      top: 14px;
      width: 16px;
    }

    :host(:state(invalid)) {
      input__alert {
        display: flex;
      }

      input {
        border-color: var(--border-error);
        padding-right: 40px;
      }
    }
  `;
}

export default style;
