import "./header";
import "./splash";

import { html } from "standard/dom";
import { urlFor } from "standard/router";

async function component(self) {
  return html`
    <memo-card-header></memo-card-header>
    <memo-main>
      <app>
        <memo-stack direction="column" spacing="quarck" align="start">
          <memo-text size="xxxs">${self.card.deck.name}</memo-text>
          <memo-text size="sm" family="highlight" color="master-darker">${await self.card.front}</memo-text>
          <memo-tag color="${self.card.type.color}">${self.card.type.value}</memo-tag>
        </memo-stack>
        <memo-card-splash></memo-card-splash>
        <memo-stack direction="column" spacing="lg" hidden on="memo-card-splash/hide:attribute/hidden|not">
          <memo-box>
            <memo-markdown>
              <template>
                ${await self.card.back}
              </template>
            </memo-markdown>
            <memo-button id="speech" variant="link">
              <memo-icon use="textToSpeech"></memo-icon>
            </memo-button>
          </memo-box>
          <memo-stack direction="column">
            <memo-text size="xs" family="highlight" color="master-darker" weight="medium">Você conseguiu se lembrar?</memo-text>
            <memo-answer>
              <memo-button id="easy" color="complete">Sim</memo-button>
              <memo-button id="good" color="success">Com esforço</memo-button>
              <memo-button id="hard" color="warning">Parcialmente</memo-button>
              <memo-button id="again" color="danger">Não</memo-button>
            </memo-answer>
            <memo-info>Isso ajuda a medir sua compreensão e memória do assunto.</memo-info>
          </memo-stack>
        </memo-stack>
      </app>
    </memo-main>
    <memo-footer></memo-footer>
  `;
}

export default component;
