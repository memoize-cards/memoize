import { css } from "standard/dom";

function style(self) {
  return css`
    :host {
      color: var(--color-${self.color});
      cursor: pointer;
      font-family: var(--font-family-${self.family});
      font-size: var(--font-size-${self.size});
      font-weight: var(--font-weight-${self.weight});
      line-height: var(--line-height-${self.lineHeight});
      text-align: ${self.align};
    }
  `;
}

export default style;
