import { css } from "standard/dom";

function style() {
  return css`
    :host {
      width: 100%;

      tag {
        align-items: center;
        background-color: var(--color-primary);
        border: var(--border-width-hairline) solid transparent;
        border-radius: var(--border-radius-pill);
        box-sizing: border-box;
        color: var(--color-master-lightest);
        display: flex;
        font-family: var(--font-family-base);
        font-size: var(--font-size-xxs);
        font-weight: var(--font-weight-medium);
        gap: var(--spacing_inset-nano);
        height: 42px;
        justify-content: center;
        letter-spacing: 0.38px;
        line-height: 0;
        padding: 0 var(--spacing_inset-xs);
        transition: all 0.2s ease-out;
      }
    }
  `;
}

export default style;
