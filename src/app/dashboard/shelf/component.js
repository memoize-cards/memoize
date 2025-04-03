import { html } from "standard/dom";
import { urlFor } from "standard/router";

function component(self) {
  return html`
    ${self.decks.map(
      (deck) => html`
        <m-stack id="deck_${deck.id}" direction="column">
          <m-cover src="${deck.cover}" aspect="portrait"></m-cover>
          <m-stack direction="column" spacing="nano">
            <m-chart learn="${deck.progress.learn}" relearn="${deck.progress.relearn}" review="${deck.progress.review}"></m-chart>
            <m-stack direction="column" spacing="none">
              <m-text size="xxxs" color="info">${deck.progress.total} Revisões</m-text>
              <m-text size="xs" family="highlight" weight="bold" color="master-darker">${deck.name}</m-text>
            </m-stack>
          </m-stack>
          <m-redirect href="${urlFor("deck", { deck: deck.id })}" on="deck_${deck.id}/click:method/go"></m-redirect>
        </m-stack>
      `,
    )}
  `;
}

export default component;
