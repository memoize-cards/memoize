import "./header";
import "./study";

import { html } from "standard/dom";
import { urlFor } from "standard/router";
import image from "./image.svg";

function component(self) {
  return html`
    <memo-dashboard-header></memo-dashboard-header>
    <memo-main>
      <app>
        <memo-stack direction="column" align="center">
          <memo-avatar src="${self.user.avatar}" alt="${self.user.name}" learn="${self.progress.learn}" relearn="${self.progress.relearn}" review="${self.progress.review}"></memo-avatar>
          <memo-stack direction="column" spacing="quarck" align="center">
            <memo-text family="highlight" size="sm" weight="bold">${self.user.name}</memo-text>
            <memo-text size="xxs"><memo-text size="xxs" weight="medium" color="success-dark">${self.progress.mastered}</memo-text> / ${self.progress.total}</memo-text>
          </memo-stack>
        </memo-stack>
        <memo-dashboard-study></memo-dashboard-study>
        <decks>
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
        </decks>
      </app>
      <empty>
        <memo-stack direction="column" spacing="nano">
          <memo-text color="master-darker" family="highlight" size="lg" weight="bold" align="center">Pronto para começar?</memo-text>
          <memo-text align="center">Para começar a estudar, vamos criar sua primeira coleção de estudo</memo-text>
        </memo-stack>
        <img alt="Memoize" src="${image}" loading="lazy" />
        <memo-stack direction="column" align="center">
          <memo-button id="createFirstDeck" width="100%">
            Criar coleção
            <memo-redirect href="${urlFor("createDeck")}" on="createFirstDeck/click:method/go"></memo-redirect>
          </memo-button>
          <memo-link href="${urlFor("howWorks")}">Como funciona o Memoize</memo-link>
        </memo-stack>
      </empty>
    </memo-main>
    <memo-footer>
      <memo-button id="goToSignOut" variant="link" slot="trailing">
        Sair
        <memo-redirect href="${urlFor("signOut")}" on="goToSignOut/click:method/go"></memo-redirect>
      </memo-button>
    </memo-footer>
  `;
}

export default component;
