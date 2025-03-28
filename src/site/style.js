import { css } from "standard/dom";

function style() {
  return css`
    site {
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-lg);
      justify-content: center;
      margin: 0 auto;
      max-width: 425px;
      min-height: calc(100svh - (72px + 32px));
      width: 100%;
    }
  `;
}

export default style;
