import { css } from "standard/dom";

function style(self) {
  return css`
    :host {
      background-color: var(--color-master-lighter);
      border-radius: var(--border-radius-pill);
      display: flex;
      overflow: hidden;
      height: 6px;
      width: 100%;

      div:first-child {
        background-color: var(--color-success);
        height: 6px;
        width: ${self.review}%;
      }

      div:nth-child(2) {
        background-color: var(--color-warning);
        height: 6px;
        width: ${self.learn}%;
      }

      div:last-child {
        background-color: var(--color-danger);
        height: 6px;
        width: ${self.relearn}%;
      }
    }
  `;
}

export default style;
