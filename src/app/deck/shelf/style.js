import { css } from "standard/dom";

function style(self) {
  return css`
    :host {
      display: ${self.cards.length ? "flex" : "none"};
      flex-direction: column;
      gap: var(--border-weight-hairline);
      margin: 0 auto;
      width: 100%;
    }
  `;
}

export default style;
