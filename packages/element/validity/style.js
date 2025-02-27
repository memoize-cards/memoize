import { css } from "standard/dom";

function style() {
  return css`
    :host {
      color: var(--color-danger-dark);
      display: none;
      font-family: var(--font-family-base);
      font-size: var(--font-size-xxs);
      font-weight: var(--font-weight-regular);
      letter-spacing: 0.5px;
      line-height: var(--line-height-lg);
      transition: all 0.2s ease-out;
    }

    :host(:state(invalid)) {
      display: inline;
    }
  `;
}

export default style;
