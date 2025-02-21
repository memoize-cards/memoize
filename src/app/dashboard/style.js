import { css } from "standard/dom";

function style(self) {
  return css`
    app {
      align-items: center;
      box-sizing: border-box;
      display: ${self.decks.length ? "flex" : "none"};
      flex-direction: column;
      gap: var(--spacing_inset-lg);
      justify-content: start;
      margin: 0 auto;
      max-width: 1024;
      padding: var(--spacing_inset-md) 0;
      width: 100%;

      decks {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        width: 100%;

        @media(width > 425px) {
          grid-template-columns: repeat(3, 1fr);
        }

        @media(width > 768px) {
          grid-template-columns: repeat(4, 1fr);
        }

        @media(width > 960px) {
          grid-template-columns: repeat(5, 1fr);
        }

        memo-stack[id] {
          cursor: pointer;
        }
      }
    }

    empty {
      align-items: center;
      display: ${self.decks.length ? "none" : "flex"};
      flex-direction: column;
      gap: var(--spacing_inset-lg);
      justify-content: center;
      margin: 0 auto;
      max-width: 426px;
      min-height: calc(100svh - (144px + 32px));
      width: 100%;
    }
  `;
}

export default style;
