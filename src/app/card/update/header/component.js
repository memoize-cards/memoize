import { html } from "standard/dom";
import { params, urlFor } from "standard/router";

function component() {
  return html`
    <m-header>
      <m-button slot="leading" id="backToDeck" variant="icon">
        <m-icon use="arrowBack"></m-icon>
        <m-redirect href="${urlFor("deck", params)}" on="backToDeck/click:method/go"></m-redirect>
      </m-button>
      <m-button slot="trailing" id="delete" color="danger" variant="icon">
        <m-icon use="delete"></m-icon>
      </m-button>
    </m-header>
  `;
}

export default component;
