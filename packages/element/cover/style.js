import { css } from "standard/dom";

function style(self) {
  return css`
    :host {
      --aspect-ratio-square: 1/1;
      --aspect-ratio-wide: 16/9;
      --width-square: 160px;
      --width-wide: 100%;

      aspect-ratio: var(--aspect-ratio-${self.aspect});
      background-color: var(--color-master-lighter);
      border-radius: var(--border-radius-sm);
      display: block;
      width: var(--width-${self.aspect});

      img {
        aspect-ratio: inherit;
        border-radius: inherit;
        color: transparent;
        display: block;
        width: 100%;
      }
    }
  `;
}

export default style;
