import { html } from "standard/dom";
import { params, urlFor } from "standard/router";
import image from "./image.svg";

function component() {
  return html`
    <m-stack direction="column" spacing="nano" align="center">
      <m-text color="master-darker" family="highlight" size="lg" weight="bold" align="center">Crie sua primeira revisão</m-text>
      <m-text align="center">Para começar a estudar, vamos criar sua primeira revisão</m-text>
    </m-stack>
    <img alt="Memoize" src="${image}" loading="lazy" />
    <m-button id="createFirstCard" width="100%">
      Criar revisão
      <m-redirect href="${urlFor("createCard", params)}" on="createFirstCard/click:method/go"></m-redirect>
    </m-button>
  `;
}

export default component;
