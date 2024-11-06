import { css } from "standard/dom";

function style(self) {
  return css`
    :host {
      display: flex;
      height: 72px;

      header {
        background-color: var(--color-${self.color});
        box-sizing: border-box;
        width: 100svw;

        container {
          align-items: center;
          box-sizing: border-box;
          display: flex;
          height: 72px;
          justify-content: space-between;
          margin: 0 auto;
          max-width: 1024px;
          padding: var(--spacing_inset-xs);
        }
      }
    }
  `;
}

export default style;
