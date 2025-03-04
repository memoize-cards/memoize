import { css } from "standard/dom";

function style(self) {
  return css`
    :host {
      display: ${self.when ? "block" : "none"};
      width: 100%;
    }
  `;
}

export default style;
