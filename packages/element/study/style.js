import { css } from "standard/dom";

function style(self) {
  return css`
    :host {
      button {
        align-items: center;
        background-color: var(--color-primary);
        border: var(--border-width-hairline) solid transparent;
        border-radius: var(--border-radius-sm);
        box-sizing: border-box;
        color: var(--color-pure-white);
        cursor: pointer;
        display: flex;
        font-family: var(--font-family-base);
        font-size: var(--font-size-xxs);
        font-weight: var(--font-weight-medium);
        gap: var(--spacing_inset-nano);
        height: 42px;
        justify-content: center;
        line-height: var(--line-height-default);
        min-width: 42px;
        padding: 0 var(--spacing_inset-xs);
        position: relative;
        transition: all 0.2s ease-out;
        width: 120px;

        &:after {
          content: "";
          display: block;
          height: 100%;
          left: 0;
          position: absolute;
          top: 0;
          width: 100%;
        }
      }
    }
  `;
}

export default style;
