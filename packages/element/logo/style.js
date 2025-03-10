import { css } from "standard/dom";

function style() {
  return css`
    :host {
      color: var(--color-primary);
      height: 42px;
      width: 42px;

      svg {
        height: inherit;
        width: inherit;
      }
    }

    :host(:state(oncolor)) {
      color: var(--color-master-lightest);
    }
  `;
}

export default style;
