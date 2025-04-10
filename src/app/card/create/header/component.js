import { html } from "standard/dom";
import { params, urlFor } from "standard/router";

function component() {
  return html`
    <m-header>
      <m-button id="backToDeck" variant="icon" slot="leading">
        <m-icon use="arrowBack"></m-icon>
        <m-redirect href="${urlFor("deck", params)}" on="backToDeck/click:method/go"></m-redirect>
      </m-button>
    </m-header>
  `;
}

export default component;
