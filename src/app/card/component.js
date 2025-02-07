import { html } from "standard/dom";
import { urlFor } from "standard/router";
import image from "./image.svg";

function component(self) {
  return html`
    <memo-header>
      <memo-button id="backToDeck" variant="link" slot="leading">
        <memo-icon use="arrowBack"></memo-icon>
        <memo-redirect href="${urlFor("deck", { deck: self.card.deck.id })}" on="backToDeck/click:method/go"></memo-redirect>
      </memo-button>
      <memo-button id="goToEditCard" variant="link" slot="trailing">
        <memo-icon use="settings"></memo-icon>
        <memo-redirect href="${urlFor("editCard", { deck: self.card.deck.id, card: self.card.id })}" on="goToEditCard/click:method/go"></memo-redirect>
      </memo-button>
    </memo-header>
    <memo-main>
      <app>
        <memo-stack direction="column" spacing="quarck">
          <memo-text size="xxxs">${self.card.deck.name} (${self.card.type})</memo-text>
          <memo-text size="sm" family="highlight" color="master-darker">${self.card.front}</memo-text>
        </memo-stack>
        <memo-stack id="splash" direction="column">
          <img alt="Memoize" src="${image}" loading="lazy" />
          <memo-button>Mostrar resposta</memo-button>
          <memo-info>Use este momento para testar seu conhecimento antes de revelar a resposta</memo-info>
        </memo-stack>
      </app>
    </memo-main>
    <memo-footer></memo-footer>
  `;
}

export default component;
