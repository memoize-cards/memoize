import { css } from "@bake-js/-o-id/dom";

function style() {
  return css`
    .required {
      color: var(--text-error-primary);
      display: none;
      font-family: var(--font-family);
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-regular);
      line-height: var(--line-height-sm);
    }

    :host(:state(invalid)) {
      .required {
        display: inline;
      }
    }
  `;
}

export default style;
