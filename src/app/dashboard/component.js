import { html } from "standard/dom";
import { urlFor } from "standard/router";
import image from "./image.svg";

function component(self) {
  return html`
    <memo-header>
      <memo-avatar slot="leading" src="${self.user.avatar}" alt="${self.user.name}"></memo-avatar>
      <memo-stack slot="leading" direction="column" spacing="quarck">
        <memo-text color="master-darker" size="xs" weight="medium">${self.user.name}</memo-text>
        <memo-link size="xxxs" href="${urlFor("signOut")}">Sign out</memo-link>
      </memo-stack>
      <memo-button slot="trailing" id="createDeck" variant="ghost" width="100%">
        <memo-icon color="currentColor" use="add"></memo-icon>
        Criar coleção
        <memo-redirect href="${urlFor("createDeck")}" on="createDeck/click:method/go"></memo-redirect>
      </memo-button>
    </memo-header>
    <memo-main>
      <app>
        <memo-stack direction="column">
          ${self.decks.map(
            (deck) => html`
              <memo-stack>
                <memo-cover></memo-cover>
                <memo-stack direction="column" spacing="nano">
                  <memo-stack direction="column" spacing="none">
                    <memo-text size="xxxs">${deck.cards.total} Revisões</memo-text>
                    <memo-text size="xs" family="highlight" weight="bold" color="master-darker">${deck.name}</memo-text>
                  </memo-stack>
                  <memo-chart learn="${deck.cards.learn}" relearn="${deck.cards.relearn}" review="${deck.cards.review}"></memo-chart>
                  <memo-stack>
                    <memo-study deck-id="${deck.id}" user-id="${self.user.id}"></memo-study>
                    <memo-button id="goToDeck_${deck.id}" variant="link">
                      Ver mais
                      <memo-redirect href="${urlFor("deck", { deck: deck.id })}" on="goToDeck_${deck.id}/click:method/go"></memo-redirect>
                    </memo-button>
                  </memo-stack>
                </memo-stack>
              </memo-stack>
            `,
          )}
        </memo-stack>
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
    <memo-footer></memo-footer>
  `;
}

export default component;
