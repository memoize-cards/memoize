import { css } from "standard/dom";

function style(self) {
  return css`
    :host {
      color: var(--color-${self.color});
      height: 24px;
      width: 24px;
    }
  `;
}

export default style;
