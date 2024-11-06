import { css } from "standard/dom";

function style() {
  return css`
    signin {
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-lg);
      height: calc(100svh - (144px + 32px));
      justify-content: center;
      margin: 0 auto;
      max-width: 426px;
      width: 100%;
    }
  `;
}

export default style;
