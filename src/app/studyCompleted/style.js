import { css } from "standard/dom";

function style() {
  return css`
    app {
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-lg);
      justify-content: center;
      margin: 0 auto;
      max-width: 425px;
      min-height: calc(100svh - (144px + 32px));
      width: 100%;
    }
  `;
}

export default style;
