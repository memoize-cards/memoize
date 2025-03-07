import { css } from "standard/dom";

function style(self) {
  return css`
    :host {
      color: var(--color-${self.color});
      display: block;
      height: var(--font-size-${self.size});
      width: var(--font-size-${self.size});

      svg {
        height: inherit;
        width: inherit;
      }
    }
  `;
}

export default style;
