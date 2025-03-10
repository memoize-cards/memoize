import { css } from "standard/dom";

function style() {
  return css`
    :host {
      width: 100%;

      day {
        align-items: center;
        border-radius: var(--border-radius-pill);
        display: flex;
        flex-direction: column;
        padding: var(--spacing_inset-nano) var(--spacing_inset-nano);
      }

      day[is-today] {
        background-color: var(--color-master-lighter);
      }
    }
  `;
}

export default style;
