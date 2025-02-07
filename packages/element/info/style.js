import { css } from "standard/dom";

function style() {
  return css`
    :host {
      align-items: center;
      color: var(--color-master);
      display: flex;
      font-family: var(--font-family-base);
      font-size: var(--font-size-xxxs);
      font-weight: var(--font-weight-regular);
      gap: var(--spacing_inset-quarck);
      line-height: var(--line-height-lg);

      svg {
        height: 18px;
      }
    }
  `;
}

export default style;
