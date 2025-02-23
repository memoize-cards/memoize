import { html } from "standard/dom";
import { urlFor } from "standard/router";
import image from "./image.svg";

function component() {
  return html`
    <memo-stack direction="column" spacing="nano">
      <memo-text color="master-darker" family="highlight" size="lg" weight="bold" align="center">Pronto para começar?</memo-text>
      <memo-text align="center">Para começar a estudar, vamos criar sua primeira coleção de estudo</memo-text>
    </memo-stack>
    <img alt="Memoize" src="${image}" loading="lazy" />
    <memo-stack direction="column" align="center">
      <memo-button id="createFirstDeck" width="100%">
        Criar coleção
        <memo-redirect href="${urlFor("createDeck")}" on="createFirstDeck/click:method/go"></memo-redirect>
      </memo-button>
      <memo-link href="${urlFor("howWorks")}">Como funciona o Memoize</memo-link>
    </memo-stack>
  `;
}

export default component;
