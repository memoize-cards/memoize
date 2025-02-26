import { css } from "standard/dom";

function style(self) {
  return css`
    :host {
      align-items: start;
      background-color: var(--color-${self.background});
      border-radius: var(--border-radius-sm);
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: start;
      padding: var(--spacing_inset-${self.spacing});
      width: 100%;
    }
  `;
}

export default style;
