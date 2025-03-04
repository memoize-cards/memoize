import { css } from "standard/dom";

function style(self) {
  return css`
    :host {
      display: block;
      margin: 0 auto;
      max-width: 425px;

      img {
        display: ${self.slim ? "none" : "block"}
      }
    }
  `;
}

export default style;
