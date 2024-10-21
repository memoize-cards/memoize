import { css } from "standard/dom";

function style() {
  return css`
    :host {
      align-items: center;
      display: flex;
      height: 72px;
      width: 100%;

      header {
        align-items: center;
        display: flex;
        justify-content: space-between;
        padding: 0 var(--container-padding-mobile);
        width: 100%;

        trailing {
          align-items: center;
          display: flex;
          gap: var(--spacing-lg);
        }
      }
    }

    @media (width >= 769px) {
      :host {
        height: 80px;
        margin: 0 auto;
        max-width: var(--container-max-width-desktop);

        header {
          padding: 0 var(--container-padding-desktop);
        }
      }
    }
  `;
}

export default style;
