import { css } from "standard/dom";

function style(self) {
  return css`
    :host {
      align-items: center;
      background-color: var(--color-master-lighter);
      border-radius: var(--border-radius-sm);
      box-sizing: border-box;
      display: flex;
      gap: var(--spacing_inset-xs);
      justify-content: center;
      padding: var(--spacing_inset-xs);
      width: 100%;
      
      img {
        aspect-ratio: 1 / 1;
        height: 120px;
        width: 120px;
      }
    }
  `;
}

export default style;
