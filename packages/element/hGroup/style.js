import { css } from "standard/dom";

function style(self) {
  return css`
    hgroup {
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-nano);
      text-align: ${self.align};
    }
  `;
}

export default style;
