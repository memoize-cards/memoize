import { html } from "standard/dom";
import { urlFor } from "standard/router";
import image from "./image.svg";

function component() {
  return html`
    <m-header>
      <m-button id="backToSite" variant="link" slot="leading">
        <m-icon use="arrowBack"></m-icon>
        <m-redirect href="${urlFor("site")}" on="backToSite/click:method/go"></m-redirect>
      </m-button>
    </m-header>
    <m-main>
      <oauth>
        <m-logo></m-logo>
        <m-stack direction="column" spacing="none" align="center">
          <m-text color="master-darker" family="highlight" size="md" weight="bold" align="center">Você terminou por hoje?</m-text>
          <m-text align="center" size="xxxs">Você será desconectado do aplicativo. Sentiremos sua falta! Volte logo para continuar seus estudos</m-text>
        </m-stack>
        <img alt="Memoize" src="${image}" loading="lazy" />
        <m-button id="logOut" width="100%">Sair</m-button>
        <m-stack direction="column" align="center">
          <m-link href="${urlFor("dashboard")}">Voltar para o Dashboard</m-link>
        </m-stack>
      </oauth>
    </m-main>
    <m-footer></m-footer>
  `;
}

export default component;
