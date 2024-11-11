import { css } from "standard/dom";

function style() {
  return css`
    :host {
      height: 42px;
      width: 42px;

      img {
        border-radius: var(--border-radius-circular);
        height: inherit;
        width: inherit;
      }
    }
  `;
}

export default style;
