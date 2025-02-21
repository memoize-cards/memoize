import { css } from "standard/dom";

function style(self) {
  return css`
    :host {
      --aspect-ratio-portrait: 3/4;;
      --aspect-ratio-square: 1/1;;
      --aspect-ratio-wide: 16/9;

      aspect-ratio: var(--aspect-ratio-${self.aspect});
      background-color: var(--color-master-lighter);
      border-radius: var(--border-radius-sm);
      display: block;
      width: 100%;

      img {
        aspect-ratio: inherit;
        border-radius: inherit;
        color: transparent;
        display: block;
        object-fit: cover;
        width: inherit;
      }
    }
  `;
}

export default style;
