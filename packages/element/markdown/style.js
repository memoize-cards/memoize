import { css } from "standard/dom";

function style() {
  return css`
    :host {
      box-sizing: border-box;
      color: var(--color-master-dark);
      display: flex;
      font-family: var(--font-family-base);
      font-size: var(--font-size-xxs);
      font-weight: var(--font-weight-regular);
      flex-direction: column;
      gap: var(--spacing_inset-xs);
      letter-spacing: 0.38px;
      line-height: var(--line-height-xl);
      margin: 0;
      overflow-x: hidden;
      padding: 0;
      width: 100%;

      :where(h1, h2, h3, h4, h5, h6) {
        color: var(--color-master-darker);
        font-family: var(--font-family-highlight);
        font-weight: var(--font-weight-bold);
      }

      h1 { font-size: var(--font-size-lg); }
      h2 { font-size: var(--font-size-md); }
      h3 { font-size: var(--font-size-sm); }
      h4 { font-size: var(--font-size-xs); }
      h5 { font-size: var(--font-size-xxs); }
      h6 { font-size: var(--font-size-xxxs); }

      img {
        border-radius: var(--border-radius-sm);
        max-width: 100%;
        object-fit: contain;
      }

      ul {
        padding-left: var(--spacing-xxs);
      }

      code:not(pre code) {
        background-color: var(--color-master-light);
        border-radius: 3px;
        padding: 1.5px 3px;
      }

      code {
        border-radius: var(--border-radius-sm);
      }

      blockquote {
        background-color: var(--color-master-lighter);
        border-left: var(--border-width-thick) solid var(--color-master-light);
        padding: var(--spacing_inset-xs);
      }
    }
  `;
}

export default style;
