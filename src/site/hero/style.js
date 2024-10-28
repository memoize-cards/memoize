import { css } from "standard/dom";

function style() {
  return css`
    :host {
      section {
        align-items: center;
        box-sizing: border-box;
        display: flex;
        justify-conten: center;
        padding: var(--spacing-7xl) var(--container-padding-mobile);
        width: 100%;
      }
    }

    @media (width >= 769px) {
      :host {
        section {
          margin: 0 auto;
          max-width: var(--container-max-width-desktop);
          padding: var(--spacing-7xl) var(--container-padding-desktop);
        }
      }
    }
  `;
}

export default style;
