import { css } from "standard/dom";

function style(self) {
  return css`
    :host {
      color: var(--text-primary);
      font-family: var(--font-family);
      font-size: var(--font-size-${self.size});
      font-weight: var(--font-weight-${self.weight});
      line-height: var(--line-height-${self.size});
    }
  `;
}

export default style;
