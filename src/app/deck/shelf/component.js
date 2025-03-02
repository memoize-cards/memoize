import { html } from "standard/dom";
import { params, urlFor } from "standard/router";

function component(self) {
  return html`
    <m-stack direction="column" spacing="nano">
      ${self.cards.map(
        (card) => html`
          <m-link href="${urlFor("editCard", { ...params, card: card.id })}">${card.front}</m-link>
        `,
      )}
    </m-stack>
  `;
}

export default component;
