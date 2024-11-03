import { css } from "standard/dom";

function style(self) {
  return css`
    :host {
      display: flex;
      flex-direction: ${self.direction};
      gap: var(--spacing_inset-${self.spacing});
      width: 100%;
    }
  `;
}

export default style;
