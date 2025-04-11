import { css } from "standard/dom";

function style() {
  return css`
    splash {
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-xs);
      justify-content: end;
      margin: 0 auto;
      max-width: 425px;
      min-height: calc(100svh - (144px + 32px));
      width: 100%;

      hat {
        background-color: var(--color-primary-lighter);
        border-radius: var(--border-radius-pill);
        color: var(--color-primary-darker);
        font-family: var(--font-family-base);
        font-size: var(--font-size-xxxs);
        font-weight: var(--font-weight-medium);
        letter-spacing: 0.38px;
        line-height: var(--line-height-default);
        padding: var(--spacing_inset-nano) var(--spacing_inset-xs);
      }
    }
  `;
}

export default style;
