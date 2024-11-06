import { css } from "standard/dom";

function style() {
  return css`
    :host {
      color: var(--color-primary);
      height: 56px;
      width: 56px;

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
