import { css } from "standard/dom";

function style(self) {
  return css`
    :host {
      display: ${self.cards.length ? "flex" : "none"};
      width: 100%;
    }
  `;
}

export default style;
