import { css } from "standard/dom";

function style(self) {
  return css`
    :host {
      display: ${self.cards.length ? "flex" : "none"};
      width: 100%;

      card {
        align-items: center; 
        background-color: var(--color-pure-white);
        border-radius: var(--border-radius-sm);
        box-sizing: border-box;
        diplay: flex;
        min-height: 40px;
        padding: var(--spacing_inset-nano);
        width: 100%;
      }
    }
  `;
}

export default style;
