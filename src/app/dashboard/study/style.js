import { css } from "standard/dom";

function style(self) {
  return css`
    :host {
      align-items: center;
      background-color: var(--color-master-lighter);
      border-radius: var(--border-radius-sm);
      box-sizing: border-box;
      display: ${self.shouldHide ? "none" : "flex"};
      flex-direction: column;
      gap: var(--spacing_inset-xs);
      justify-content: center;
      padding: var(--spacing_inset-xs);
      width: 100%;

      @media (width > 595px) {
        flex-direction: row;
        padding-right: var(--spacing_inset-md);
      }
      
      img {
        aspect-ratio: 1 / 1;
        height: 80px;
        width: 80px;
      }

      m-button {
        width: 100%;

        @media (width > 595px) {
          width: 200px;
        }
      }
    }
  `;
}

export default style;
