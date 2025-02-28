import "./header";
import "./splash";
import { html } from "standard/dom";

async function component(self) {
  return html`
    <m-card-header></m-card-header>
    <m-main>
      <app>
        <m-stack direction="column" spacing="quarck" align="start">
          <m-text size="xxxs">${self.card.deck.name}</m-text>
          <m-text size="sm" family="highlight" color="master-darker">${await self.card.front}</m-text>
          <m-tag color="${self.card.type.color}">${self.card.type.value}</m-tag>
        </m-stack>
        <m-card-splash></m-card-splash>
        <m-stack direction="column" spacing="lg" hidden on="m-card-splash/hide:attribute/hidden|not">
          <m-box>
            <m-markdown>
              <template>
                ${await self.card.back}
              </template>
            </m-markdown>
            <m-button id="speech" variant="link">
              <m-icon use="textToSpeech"></m-icon>
            </m-button>
          </m-box>
          <m-stack direction="column">
            <m-text size="xs" family="highlight" color="master-darker" weight="medium">Você conseguiu se lembrar?</m-text>
            <m-answer>
              <m-button id="easy" color="complete">Sim</m-button>
              <m-button id="good" color="success">Com esforço</m-button>
              <m-button id="hard" color="warning">Parcialmente</m-button>
              <m-button id="again" color="danger">Não</m-button>
            </m-answer>
            <m-info>Isso ajuda a medir sua compreensão e memória do assunto.</m-info>
          </m-stack>
        </m-stack>
      </app>
    </m-main>
    <m-footer></m-footer>
  `;
}

export default component;
