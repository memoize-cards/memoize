import { html } from "standard/dom";
import { urlFor } from "standard/router";

function component() {
  return html`
    <memo-header>
      <memo-logo slot="leading"></memo-logo>
      <memo-button slot="trailing" id="createDeck" variant="ghost" width="100%">
        <memo-icon color="currentColor" use="add"></memo-icon>
        Criar coleção
        <memo-redirect href="${urlFor("createDeck")}" on="createDeck/click:method/go"></memo-redirect>
      </memo-button>
    </memo-header>
    `;
}

export default component;
