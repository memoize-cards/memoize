import { css } from "standard/dom";

function style(self) {
  return css`
    :host {
      aspect-ratio: 1 / 1;
      display: flex;
      height: 32px;
      width: 32px;
    }

    img {
      height: 100%;
      width: 100%;
    }
  `;
}

export default style;
