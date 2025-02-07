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
        <memo-cover aspect="wide"></memo-cover>
        <memo-stack direction="column" spacing="nano">
          <memo-text size="xxxs">${self.deck.cards.total} Revisões</memo-text>
          <memo-text size="sm" family="highlight" weight="bold" color="master-darker">${self.deck.name}</memo-text>
          <memo-text size="xxs">${self.deck.description}</memo-text>
        </memo-stack>
        <memo-chart learn="${self.deck.cards.learn}" relearn="${self.deck.cards.relearn}" review="${self.deck.cards.review}"></memo-chart>
        <memo-stack>
          <memo-button id="goToCard" width="120px">
            Estudar
            <memo-redirect href="${urlFor("card", { deck: self.deck.id })}" on="goToCard/click:method/go"></memo-redirect>
          </memo-button>
          <memo-button id="goToCreateCard" variant="ghost">
            <memo-icon color="currentColor" use="add"></memo-icon>
            Criar revisão
            <memo-redirect href="${urlFor("createCard", { deck: self.deck.id })}" on="goToCreateCard/click:method/go"></memo-redirect>
          </memo-button>
        </memo-stack>
        <empty>
          <memo-stack direction="column" spacing="nano">
            <memo-text color="master-darker" family="highlight" size="lg" weight="bold" align="center">Crie sua primeira revisão</memo-text>
            <memo-text align="center">Para começar a estudar, vamos criar sua primeira revisão</memo-text>
          </memo-stack>
          <img alt="Memoize" src="${image}" loading="lazy" />
          <memo-button id="createFirstDeck" width="100%">
            Criar revisão
            <memo-redirect href="${urlFor("createCard", { deck: self.deck.id })}" on="createFirstDeck/click:method/go"></memo-redirect>
          </memo-button>
        </empty>
      </app>
    </memo-main>
    <memo-footer></memo-footer>
  `;
}

export default component;
