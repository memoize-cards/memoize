import { css } from "standard/dom";

function style(self) {
  return css`
    :host {
      align-items: ${self.align};
      display: flex;
      flex-direction: ${self.direction};
      gap: var(--spacing_inset-${self.spacing});
      height: ${self.height};
      justify-content: ${self.justify};
      width: ${self.width};
    }
  `;
}

export default style;
