import { css } from "standard/dom";

function style(self) {
  return css`
    :host {
      --relearn: ${self.relearn};
      --learn: ${self.learn};
      --review: ${self.review};

      align-items: center;
      aspect-ratio: 1 / 1;
      background: ${
        self.total
          ? `conic-gradient(
              var(--color-danger) 0% calc(var(--relearn) * 1%),
              var(--color-warning) calc(var(--relearn) * 1%) calc((var(--relearn) + var(--learn)) * 1%),
              var(--color-success) calc((var(--relearn) + var(--learn)) * 1%) 100%
            )`
          : "conic-gradient(var(--color-master-light) 0% 100%)"
      };
      border-radius: var(--border-radius-circular);
      box-sizing: border-box;
      display: flex;
      height: 138px;
      justify-content: center;
      width: 138px;

      &:before {
        content: "";
        background-color: var(--color-master-lighter);
        border: var(--border-width-heavy) solid var(--color-master-lightest);
        border-radius: inherit;
        box-sizing: border-box;
        display: block;
        height: 128px;
        width: 128px;
      }

      img {
        aspect-ratio: 1 / 1;
        background-color: transparent;
        border-radius: inherit;
        box-sizing: border-box;
        color: transparent;
        height: 120px;
        position: absolute;
        width: 120px;
      }
    }
  `;
}

export default style;
