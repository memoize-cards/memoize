import { css } from "standard/dom";

function style() {
  return css`
    :host {
      display: grid;
      gap: var(--spacing_inset-xs);
      grid-template-columns: repeat(2, 1fr);
      width: 100%;

      @media (width > 768px) {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  `;
}

export default style;
