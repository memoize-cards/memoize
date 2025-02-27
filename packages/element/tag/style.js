import { css } from "standard/dom";

function style(self) {
  return css`
    :host {
      span {
        align-items: center;
        background-color: var(--color-${self.color}-lighter);
        border: var(--border-width-hairline) solid transparent;
        border-radius: var(--border-radius-xs);
        box-sizing: border-box;
        color: var(--color-${self.color}-darker);
        cursor: pointer;
        display: flex;
        font-family: var(--font-family-base);
        font-size: var(--font-size-xxxs);
        font-weight: var(--font-weight-medium);
        gap: var(--spacing_inset-nano);
        justify-content: center;
        letter-spacing: 0.38px;
        line-height: var(--line-height-default);
        padding: var(--spacing_inset-quarck) var(--spacing_inset-nano);
        position: relative;
        transition: all 0.2s ease-out;
      }
    }
  `;
}

export default style;
