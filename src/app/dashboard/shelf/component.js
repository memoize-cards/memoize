import { html } from "standard/dom";
import { urlFor } from "standard/router";

function component(self) {
  return html`
    ${self.decks.map(
      (deck) => html`
        <memo-stack id="deck_${deck.id}" direction="column">
          <memo-cover src="${deck.cover}" aspect="portrait"></memo-cover>
          <memo-stack direction="column" spacing="nano">
            <memo-chart learn="${deck.cards.learn}" relearn="${deck.cards.relearn}" review="${deck.cards.review}"></memo-chart>
            <memo-stack direction="column" spacing="none">
              <memo-text size="xxxs">${deck.cards.total} Revisões</memo-text>
              <memo-text size="xs" family="highlight" weight="bold" color="master-darker">${deck.name}</memo-text>
            </memo-stack>
          </memo-stack>
          <memo-redirect href="${urlFor("deck", { deck: deck.id })}" on="deck_${deck.id}/click:method/go"></memo-redirect>
        </memo-stack>
      `,
    )}
  `;
}

export default component;
