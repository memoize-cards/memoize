import { css } from "standard/dom";

function style(self) {
  return css`
    app {
      align-items: center;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-lg);
      justify-content: start;
      margin: 0 auto;
      max-width: 1024;
      padding: var(--spacing_inset-sm) 0;
      width: 100%;
    }
  `;
}

export default style;
