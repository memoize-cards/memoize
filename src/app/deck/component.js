import { html } from "standard/dom";
import { urlFor } from "standard/router";
import image from "./image.svg";

function component(self) {
  return html`
    <memo-header>
      <memo-button id="backToDashboard" variant="link" slot="leading">
        <memo-icon use="arrowBack"></memo-icon>
        <memo-redirect href="${urlFor("dashboard")}" on="backToDashboard/click:method/go"></memo-redirect>
      </memo-button>
      <memo-button id="goToEditDeck" variant="link" slot="trailing">
        <memo-icon use="settings"></memo-icon>
        <memo-redirect href="${urlFor("editDeck", { deck: self.deck.id })}" on="goToEditDeck/click:method/go"></memo-redirect>
      </memo-button>
    </memo-header>
    <memo-main>
      <app>
        <memo-cover aspect="wide" src="${self.deck.cover}"></memo-cover>
        <memo-stack direction="column" spacing="quarck">
          <memo-text size="xxxs">${self.deck.progress.total} Revisões</memo-text>
          <memo-text size="sm" family="highlight" weight="bold" color="master-darker">${self.deck.name}</memo-text>
          <memo-text size="xxs">${self.deck.description}</memo-text>
        </memo-stack>
        <memo-chart learn="${self.deck.progress.learn}" relearn="${self.deck.progress.relearn}" review="${self.deck.progress.review}"></memo-chart>
        <memo-stack>
          <memo-study deck-id="${self.deck.id}" user-id="${self.user.id}"></memo-study>
          <memo-button id="goToCreateCard" variant="ghost">
            <memo-icon color="currentColor" use="add"></memo-icon>
            Criar revisão
            <memo-redirect href="${urlFor("createCard", { deck: self.deck.id })}" on="goToCreateCard/click:method/go"></memo-redirect>
          </memo-button>
        </memo-stack>
        <cards>
          <memo-stack direction="column" spacing="nano">
            ${self.deck.cards.map(
              (card) => html`
                <memo-link href="${urlFor("editCard", { deck: self.deck.id, card: card.id })}">${card.front}</memo-link>
              `,
            )}
          </memo-stack>
        </cards>
        <empty>
          <memo-stack direction="column" spacing="nano" align="center">
            <memo-text color="master-darker" family="highlight" size="lg" weight="bold" align="center">Crie sua primeira revisão</memo-text>
            <memo-text align="center">Para começar a estudar, vamos criar sua primeira revisão</memo-text>
          </memo-stack>
          <img alt="Memoize" src="${image}" loading="lazy" />
          <memo-button id="createFirstCard" width="100%">
            Criar revisão
            <memo-redirect href="${urlFor("createCard", { deck: self.deck.id })}" on="createFirstCard/click:method/go"></memo-redirect>
          </memo-button>
        </empty>
      </app>
    </memo-main>
    <memo-footer></memo-footer>
  `;
}

export default component;
