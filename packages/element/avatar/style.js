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
      height: 120px;
      justify-content: center;
      width: 120px;

      &:before {
        content: "";
        background-color: var(--color-master-lighter);
        border: var(--border-width-thick) solid var(--color-master-lightest);
        border-radius: inherit;
        display: block;
        height: 98px;
        width: 98px;
      }

      img {
        aspect-ratio: 1 / 1;
        background-color: transparent;
        border-radius: inherit;
        color: transparent;
        height: 98px;
        position: absolute;
        width: 98px;
      }
    }
  `;
}

export default style;
