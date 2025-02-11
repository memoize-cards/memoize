import { css } from "standard/dom";

function style() {
  return css`
    :host {
      aspect-ratio: 1 / 1;
      background-color: var(--color-master-lighter);
      border-radius: var(--border-radius-circular);
      display: block;
      height: 42px;
      width: 42px;

      img {
        background-color: transparent;
        border-radius: inherit;
        color: transparent;
        height: inherit;
        width: inherit;
      }
    }
  `;
}

export default style;
