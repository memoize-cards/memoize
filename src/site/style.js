import { css } from "standard/dom";

function style() {
  return css`
    site {
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-md);
      height: calc(100svh - (144px + 32px));
      justify-content: center;
      margin: 0 auto;
      max-width: 426px;
    }
  `;
}

export default style;
