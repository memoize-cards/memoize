import { css } from "standard/dom";

function style() {
  return css`
    header {
      align-items: center;
      box-sizing: border-box;
      display: flex;
      height: 72px;
      justify-content: space-between;
      padding: 0 var(--container-padding-mobile);
      width: 100%;

      trailing {
        align-items: center;
        display: flex;
        gap: var(--spacing-lg);
      }
    }

    @media (width >= 769px) {
      header {
        height: 80px;
        margin: 0 auto;
        max-width: var(--container-max-width-desktop);
        padding: 0 var(--container-padding-desktop);
      }
    }
  `;
}

export default style;
