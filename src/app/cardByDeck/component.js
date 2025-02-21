import { html } from "standard/dom";
import { urlFor } from "standard/router";
import image from "./image.svg";

async function component(self) {
  return html`
    <memo-header>
      <memo-button id="backToDeck" variant="link" slot="leading">
        <memo-icon use="arrowBack"></memo-icon>
        <memo-redirect href="${urlFor("deck", { deck: self.card.deck.id })}" on="backToDeck/click:method/go"></memo-redirect>
      </memo-button>
    </memo-header>
    <memo-main>
      <app>
        <memo-stack direction="column" spacing="quarck" align="start">
          <memo-text size="xxxs">${self.card.deck.name}</memo-text>
          <memo-text size="sm" family="highlight" color="master-darker">${await self.card.front}</memo-text>
          <memo-tag color="${self.card.type.color}">${self.card.type.value}</memo-tag>
        </memo-stack>
        <memo-stack id="splash" direction="column" on="reveal/click:attribute/hidden">
          <img alt="Memoize" src="${image}" loading="lazy" />
          <memo-button id="reveal" value="true" width="100%">Mostrar resposta</memo-button>
          <memo-info>Use este momento para testar seu conhecimento antes de revelar a resposta</memo-info>
        </memo-stack>
        <memo-stack direction="column" hidden on="reveal/click:attribute/hidden|not">
          <memo-markdown>
            <template>
              ${await self.card.back}
            </template>
          </memo-markdown>
          <memo-text size="xs" family="highlight" color="master-darker">Você conseguiu se lembrar?</memo-text>
          <memo-stack>
            <memo-button id="easy" color="complete" width="25%">Sim</memo-button>
            <memo-button id="good" color="success" width="25%">Com esforço</memo-button>
            <memo-button id="hard" color="warning" width="25%">Parcialmente</memo-button>
            <memo-button id="again" color="danger" width="25%">Não</memo-button>
          </memo-stack>
        </memo-stack>
      </app>
    </memo-main>
    <memo-footer></memo-footer>
  `;
}

export default component;
