import { html } from "standard/dom";
import { urlFor } from "standard/router";
import image from "./image.svg";

function component(self) {
  return html`
    <memo-header>
      <memo-avatar slot="leading" src="${self.avatar}" alt="${self.name}"></memo-avatar>
      <memo-stack slot="leading" direction="column" spacing="quarck">
        <memo-text color="master-darker" size="xs" weight="medium">${self.name}</memo-text>
        <memo-link size="xxxs" href="${urlFor("signOut")}">Sign out</memo-link>
      </memo-stack>
      <memo-button slot="trailing" id="createDeck" variant="ghost" width="100%">
        <memo-icon use="add"></memo-icon>
        Criar coleção
        <memo-redirect href="${urlFor("createDeck")}" on="createDeck/click:method/go"></memo-redirect>
      </memo-button>
    </memo-header>
    <memo-main>
      <app>
        <ul>
          ${self.decks.map(
            (deck) => html`
              <li>
                <memo-stack direction="column" spacing="quarck">
                  <memo-text size="xxxs">${deck.cards.total} Revisoes</memo-text>
                  <memo-text color="master-darker" size="xs" weight="bold">${deck.name}</memo-text>
                </memo-stack>
              </li>
            `,
          )}
        </ul>
      </app>
      <app>
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
      </app>
    </memo-main>
    <memo-footer>
      <memo-text slot="leading">© 2024 Memoize. Todos os direitos reservados.</memo-text>
      <memo-button slot="trailing" variant="link">
        <memo-icon use="language"></memo-icon>
      </memo-button>
    </memo-footer>
  `;
}

export default component;

//
// controladoria
// roadmap
// demo
// qual o meu plano
