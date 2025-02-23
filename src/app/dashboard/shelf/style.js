import { css } from "standard/dom";

function style(self) {
  return css`
    :host {
      display: grid;
      gap: var(--spacing_inset-xs);
      grid-template-columns: repeat(2, 1fr);
      width: 100%;

      @media(width > 425px) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media(width > 768px) {
        grid-template-columns: repeat(4, 1fr);
      }

      @media(width > 960px) {
        grid-template-columns: repeat(5, 1fr);
      }

      memo-stack[id] {
        cursor: pointer;
      }
    }
  `;
}

export default style;
