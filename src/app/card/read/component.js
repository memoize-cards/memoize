import "./answer";
import "./back";
import "./front";
import "./header";
import "./splash";
import { html } from "standard/dom";

async function component(self) {
  return html`
    <m-card-header></m-card-header>
    <m-main>
      <app>
        <m-card-front deck="${self.card.deck}" type="${self.card.type}">
          ${await self.card.front}
        </m-card-front>
        <m-show when="${!!self.card.cover}">
          <m-cover aspect="wide" src="${self.card.cover}"></m-cover>
        </m-show>
        <m-card-splash slim="${!!self.card.cover}"></m-card-splash>
        <m-card-back hidden on="m-card-splash/hide:attribute/hidden|not">
          <m-markdown>
            <template>${await self.card.back}</template>
          </m-markdown>
        </m-card-back>
        <m-card-answer hidden on="m-card-splash/hide:attribute/hidden|not"></m-card-answer>
      </app>
    </m-main>
    <m-footer></m-footer>
  `;
}

export default component;
