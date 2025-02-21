import { css } from "standard/dom";

function style(self) {
  return css`
    main {
      background-color: var(--color-${self.color});

      container {
        align-items: start;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: var(--spacing_inset-md);
        justify-content: start;
        margin: 0 auto;
        max-width: 1024px;
        min-height: calc(100svh - 144px);
        padding: var(--spacing_inset-xs);
      }
    }
  `;
}

export default style;
