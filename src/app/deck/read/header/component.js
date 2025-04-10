import { html } from "standard/dom";
import { params, urlFor } from "standard/router";

function component(self) {
  return html`
    <m-header>
      <m-button slot="leading" id="backToDashboard" variant="link">
        <m-icon use="arrowBack"></m-icon>
        <m-redirect href="${urlFor("dashboard")}" on="backToDashboard/click:method/go"></m-redirect>
      </m-button>
      <m-show when="${self.deck.paused}" slot="trailing">
        <m-tag color="danger">Pausado para estudo</m-tag>
      </m-show>
      <m-button id="goToEditDeck" variant="link" slot="trailing">
        <m-icon use="settings"></m-icon>
        <m-redirect href="${urlFor("editDeck", params)}" on="goToEditDeck/click:method/go"></m-redirect>
      </m-button>
    </m-header>
  `;
}

export default component;
