import { css } from "standard/dom";

function style() {
  return css`
    svg {
      aspect-ratio: 1 / 1;
      color: var(--color-primary);
      height: 56px;
      width: 56px;
    }

    :host(:state(oncolor)) {
      svg {
        color: var(--color-master-lightest);
      }
    }
  `;
}

export default style;
