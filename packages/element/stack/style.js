import { css } from "standard/dom";

function style(self) {
  return css`
    :host {
      align-items: ${self.align};
      display: flex;
      flex-direction: ${self.direction};
      gap: var(--spacing_inset-${self.spacing});
      justify-content: ${self.justify};
      width: 100%;
    }
  `;
}

export default style;
