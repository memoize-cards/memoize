import "./empty";
import "./header";
import "./shelf";
import "./study";

import { html } from "standard/dom";
import { urlFor } from "standard/router";

function component(self) {
  return html`
    <m-deck-header></m-deck-header>
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
          <m-deck-study></m-deck-study>
        </m-stack>
        <m-deck-shelf></m-deck-shelf>
        <m-deck-empty></m-deck-empty>
      </app>
    </m-main>
    <m-footer></m-footer>
  `;
}

export default component;
