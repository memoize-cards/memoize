import { html } from "standard/dom";
import { urlFor } from "standard/router";
import logo from "./image.svg";
import image from "./image.svg";

function component() {
  return html`
    <memo-header>
      <memo-button id="backToSite" variant="link" slot="leading">
        <memo-icon use="arrowBack"></memo-icon>
        <memo-redirect href="${urlFor("site")}" on="backToSite/click:method/go"></memo-redirect>
      </memo-button>
    </memo-header>
    <memo-main>
      <oauth>
        <memo-logo></memo-logo>
        <memo-stack direction="column" spacing="nano" align="center">
          <memo-text color="master-darker" family="highlight" size="lg" weight="bold" align="center">Você terminou por hoje?</memo-text>
          <memo-text align="center">Você será desconectado do aplicativo. Sentiremos sua falta! Volte logo para continuar seus estudos</memo-text>
        </memo-stack>
        <img alt="Memoize" src="${image}" loading="lazy" />
        <memo-button id="logOut" width="100%">Sair</memo-button>
        <memo-stack direction="column" align="center">
          <memo-link href="${urlFor("dashboard")}">Voltar para o Dashboard</memo-link>
        </memo-stack>
      </oauth>
    </memo-main>
    <memo-footer></memo-footer>
  `;
}

export default component;
