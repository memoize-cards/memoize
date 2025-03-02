import { css } from "standard/dom";

function style(self) {
  return css`
    app {
      align-items: start;
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-lg);
      justify-content: start;
      margin: 0 auto;
      max-width: 768px;
      min-height: calc(100svh - (144px + 32px));
      width: 100%;
    }

    cards {
      display: ${self.deck.progress.total ? "flex" : "none"};
      flex-direction: column;
      gap: var(--border-weight-hairline);
      margin: 0 auto;
      width: 100%;
    }

    empty {
      align-items: center;
      display: ${self.deck.progress.total ? "none" : "flex"};
      flex-direction: column;
      gap: var(--spacing_inset-lg);
      justify-content: center;
      margin: 0 auto;
      max-width: 425px;
      width: 100%;
    }
  `;
}

export default style;
