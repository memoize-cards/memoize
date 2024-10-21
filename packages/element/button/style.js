import { css } from "standard/dom";

function style(self) {
  return css`
    :host {
      --mc-button-background-color-primary: var(--bg-brand-solid);
      --mc-button-background-color-primary_hover: var(--bg-brand-solid_hover);
      --mc-button-background-color-primary-disabled: var(--bg-disabled);
      --mc-button-background-color-secondary: var(--bg-secondary);
      --mc-button-background-color-secondary_hover: var(--bg-secondary_hover);
      --mc-button-background-color-secondary-disabled: var(--bg-primary);
      --mc-button-color-primary: var(--text-white);
      --mc-button-color-primary_hover: var(--text-white);
      --mc-button-color-primary-disabled: var(--text-disabled);
      --mc-button-color-secondary: var(--text-secondary);
      --mc-button-color-secondary_hover: var(--text-secondary_hover);
      --mc-button-color-secondary-disabled: var(--text-disabled);
      --mc-button-font-size-sm: var(--font-size-sm);
      --mc-button-font-size-md: var(--font-size-sm);
      --mc-button-font-size-lg: var(--font-size-md);
      --mc-button-font-size-xl: var(--font-size-md);
      --mc-button-font-size-2xl: var(--font-size-lg);
      --mc-button-line-height-sm: var(--line-height-sm);
      --mc-button-line-height-md: var(--line-height-sm);
      --mc-button-line-height-lg: var(--line-height-md);
      --mc-button-line-height-xl: var(--line-height-md);
      --mc-button-line-height-2xl: var(--line-height-lg);
      --mc-button-height-sm: 36px;
      --mc-button-height-md: 40px;
      --mc-button-height-lg: 44px;
      --mc-button-height-xl: 48px;
      --mc-button-height-2xl: 60px;

      button {
        align-items: center;
        background-color: var(--mc-button-background-color-${self.variant});
        border: none;
        border-radius: var(--radius-md);
        box-sizing: border-box;
        color: var(--mc-button-color-${self.variant});
        cursor: pointer;
        display: flex;
        font-family: var(--font-family);
        font-size: var(--mc-button-font-size-${self.size});
        font-weight: var(--font-weight-semibold);
        gap: var(--spacing-xs);
        height: var(--mc-button-height-${self.size});
        line-height: var(--mc-button-line-height-${self.size});
        padding: 0 var(--spacing-lg);
        transition: all 0.2s ease-out;

        &:focus-visible {
          box-shadow: var(--focus-ring);
          outline: 0;
        }

        &:hover {
          color: var(--mc-button-color-${self.variant}_hover);
          background-color: var(--mc-button-background-color-${self.variant}_hover);
        }
      }
    }

    :host(:state(disabled)) {
      button {
        background-color: var(--mc-button-background-color-${self.variant}-disabled);
        color: var(--mc-button-color-${self.variant}-disabled);
        cursor: auto;
      }
    }
  `;
}

export default style;
