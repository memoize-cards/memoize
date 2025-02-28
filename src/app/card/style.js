import { css } from "standard/dom";

function style(self) {
  return css`
    app {
      align-items: start;
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-lg);
      justify-content: start;
      margin: 0 auto;
      max-width: 768px;
      min-height: calc(100svh - (144px + 32px));
      width: 100%;
    }

    m-box {
      position: relative;

      #speech {
        position: absolute;
        right: 0;
        top: 0;
      }
    }
  `;
}

export default style;
