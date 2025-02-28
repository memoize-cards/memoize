import { html } from "standard/dom";
import { params, urlFor } from "standard/router";

function component(self) {
  return html`
    <m-header>
      <m-button slot="leading" id="backToDeck" variant="icon">
        <m-icon use="arrowBack"></m-icon>
        <m-redirect href="${urlFor("deck", params)}" on="backToDeck/click:method/go"></m-redirect>
      </m-button>
      <m-show when="${self.deck.paused}" slot="trailing">
        <m-stack align="center">
          <m-tag color="danger">Pausado para estudo</m-tag>
          <m-button id="play" color="danger" variant="icon">
            <m-icon use="play"></m-icon>
          </m-button>
        </m-stack>
      </m-show>
      <m-hide when="${self.deck.paused}" slot="trailing">
        <m-button id="pause" color="danger" variant="icon">
          <m-icon use="pause"></m-icon>
        </m-button>
      </m-hide>
      <m-button slot="trailing" id="delete" color="danger" variant="icon">
        <m-icon use="delete"></m-icon>
      </m-button>
    </m-header>
  `;
}

export default component;
