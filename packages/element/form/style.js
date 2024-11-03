import { css } from "standard/dom";

function style() {
  return css`
    :host {
      width: 100%;

      form {
        align-items: start;
        display: flex;
        flex-direction: column;
        gap: var(--spacing_inset-xs);
        width: 100%;
      }
    }
  `;
}

export default style;
