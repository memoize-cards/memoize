import { css } from "standard/dom";

function style(self) {
  return css`
    :host {
      align-items: center;
      display: ${self.cards.count ? "none" : "flex"};
      flex-direction: column;
      gap: var(--spacing_inset-lg);
      justify-content: center;
      margin: 0 auto;
      max-width: 425px;
      width: 100%;
    }
  `;
}

export default style;
