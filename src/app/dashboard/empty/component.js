import { html } from "standard/dom";
import { urlFor } from "standard/router";
import image from "./image.svg";

function component() {
  return html`
    <m-stack direction="column" spacing="none" align="center">
      <m-text color="master-darker" family="highlight" size="md" weight="bold" align="center">Pronto para começar?</m-text>
      <m-text align="center" size="xxxs">Para começar a estudar, vamos criar sua primeira coleção de estudo</m-text>
    </m-stack>
    <img alt="Memoize" src="${image}" loading="lazy" />
    <m-stack direction="column" align="center">
      <m-button id="createFirstDeck" width="100%">
        Criar coleção
        <m-redirect href="${urlFor("createDeck")}" on="createFirstDeck/click:method/go"></m-redirect>
      </m-button>
      <m-link href="${urlFor("howWorks")}">Como funciona o Memoize</m-link>
    </m-stack>
  `;
}

export default component;
