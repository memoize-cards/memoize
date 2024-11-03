import { css } from "standard/dom";

function style(self) {
  return css`
    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }

    footer {
      background-color: var(--color-${self.color});

      container {
        align-items: center;
        display: flex;
        height: 72px;
        justify-content: space-between;
        margin: 0 auto;
        max-width: 1024px;
        padding: var(--spacing_inset-xs);
      }
    }
  `;
}

export default style;
