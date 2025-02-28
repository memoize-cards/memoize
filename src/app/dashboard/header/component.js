import { html } from "standard/dom";
import { urlFor } from "standard/router";

function component() {
  return html`
    <m-header>
      <m-logo slot="leading"></m-logo>
      <m-button slot="trailing" id="createDeck" variant="ghost" width="100%">
        <m-icon color="currentColor" use="add"></m-icon>
        Criar coleção
        <m-redirect href="${urlFor("createDeck")}" on="createDeck/click:method/go"></m-redirect>
      </m-button>
    </m-header>
  `;
}

export default component;
