import { css } from "standard/dom";

function style(self) {
  return css`
    :host {
      width: ${self.width};

      button {
        align-items: center;
        background-color: var(--color-${self.color});
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
        letter-spacing: 0.5px;
        line-height: var(--line-height-default);
        min-width: 42px;
        padding: 0 var(--spacing_inset-xs);
        position: relative;
        transition: all 0.2s ease-out;
        width: 100%;

        &:after {
          content: "";
          display: block;
          height: 100%;
          left: 0;
          position: absolute;
          top: 0;
          z-index: 1;
          width: 100%;
        }
      }
    }

    :host(:state(naked)) {
      button {
        background-color: transparent;
        border: var(--border-width-hairline) solid var(--color-${self.color});
        color: var(--color-${self.color});
      }
    }

    :host(:state(ghost)) {
      button {
        background-color: var(--color-master-lighter);
        border: var(--border-width-hairline) solid transparent;
        color: var(--color-${self.color});
      }
    }

    :host(:state(link)) {
      button {
        background-color: transparent;
        border: var(--border-width-hairline) solid transparent;
        color: var(--color-${self.color});
      }
    }
  `;
}

export default style;
