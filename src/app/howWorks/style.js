import { css } from "standard/dom";

function style() {
  return css`
    app {
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: calc(var(--spacing_inset-giant) * 1.62);
      justify-content: center;
      margin: 0 auto;
      max-width: 425px;
      min-height: calc(100svh - (144px + 32px));
      width: 100%;

      ul {
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: calc(var(--spacing_inset-giant) * 1.62);
        list-style: none;
      }

      li {
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: var(--spacing_inset-nano);
      }

      span {
        align-items: center;
        border: var(--border-width-thin) solid var(--color-master-darker);
        border-radius: var(--border-radius-circular);
        color: var(--color-master-darker);
        display: flex;
        font-family: var(--font-family-base);
        font-size: var(--font-size-md);
        font-weight: var(--font-weight-bold);
        height: 56px;
        justify-content: center;
        margin-bottom: var(--spacing_inset-nano);
        text-align: center;
        width: 56px;
      }
    }
  `;
}

export default style;
