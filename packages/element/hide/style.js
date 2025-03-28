import { css } from "standard/dom";

function style(self) {
  return css`
    :host {
      display: ${self.when ? "none" : "block"};
      width: 100%;
    }
  `;
}

export default style;
