import { css } from "standard/dom";

function style(self) {
  return css`
    :host {
      display: ${self.hidden ? "none" : "block"};
      width: 100%;

      m-box {
        padding-right: var(--spacing_inset-lg);
        position: relative;

        #speech {
          position: absolute;
          right: 0;
          top: 0;
        }
      }
    }
  `;
}

export default style;
