import { html } from "standard/dom";
import { urlFor } from "standard/router";
import image from "./image.svg";

function component(self) {
  return html`
    <m-header>
      <m-button id="backToDashboard" variant="link" slot="leading">
        <m-icon use="arrowBack"></m-icon>
        <m-redirect href="${urlFor("dashboard")}" on="backToDashboard/click:method/go"></m-redirect>
      </m-button>
      <m-button id="goToEditDeck" variant="link" slot="trailing">
        <m-icon use="settings"></m-icon>
        <m-redirect href="${urlFor("editDeck", { deck: self.deck.id })}" on="goToEditDeck/click:method/go"></m-redirect>
      </m-button>
    </m-header>
    <m-main>
      <app>
        <m-cover aspect="wide" src="${self.deck.cover}"></m-cover>
        <m-stack direction="column" spacing="quarck">
          <m-text size="xxxs">${self.deck.progress.total} Revisões</m-text>
          <m-text size="sm" family="highlight" weight="bold" color="master-darker">${self.deck.name}</m-text>
          <m-text size="xxs">${self.deck.description}</m-text>
        </m-stack>
        <m-chart learn="${self.deck.progress.learn}" relearn="${self.deck.progress.relearn}" review="${self.deck.progress.review}"></m-chart>
        <m-stack>
          <m-study deck-id="${self.deck.id}" user-id="${self.user.id}"></m-study>
          <m-button id="goToCreateCard" variant="ghost">
            <m-icon color="currentColor" use="add"></m-icon>
            Criar revisão
            <m-redirect href="${urlFor("createCard", { deck: self.deck.id })}" on="goToCreateCard/click:method/go"></m-redirect>
          </m-button>
        </m-stack>
        <cards>
          <m-stack direction="column" spacing="nano">
            ${self.deck.cards.map(
              (card) => html`
                <m-link href="${urlFor("editCard", { deck: self.deck.id, card: card.id })}">${card.front}</m-link>
              `,
            )}
          </m-stack>
        </cards>
        <empty>
          <m-stack direction="column" spacing="nano" align="center">
            <m-text color="master-darker" family="highlight" size="lg" weight="bold" align="center">Crie sua primeira revisão</m-text>
            <m-text align="center">Para começar a estudar, vamos criar sua primeira revisão</m-text>
          </m-stack>
          <img alt="Memoize" src="${image}" loading="lazy" />
          <m-button id="createFirstCard" width="100%">
            Criar revisão
            <m-redirect href="${urlFor("createCard", { deck: self.deck.id })}" on="createFirstCard/click:method/go"></m-redirect>
          </m-button>
        </empty>
      </app>
    </m-main>
    <m-footer></m-footer>
  `;
}

export default component;
