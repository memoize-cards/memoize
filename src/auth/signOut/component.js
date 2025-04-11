import { html } from "standard/dom";
import { urlFor } from "standard/router";
import image from "./image.svg";

function component() {
  return html`
    <m-header>
      <m-button id="backToDashboard" variant="link" slot="leading">
        <m-icon use="arrowBack"></m-icon>
        <m-redirect href="${urlFor("dashboard")}" on="backToDashboard/click:method/go"></m-redirect>
      </m-button>
    </m-header>
    <m-main>
      <auth>
        <m-logo></m-logo>
        <m-stack direction="column" spacing="none" align="center">
          <m-text color="master-darker" family="highlight" size="md" weight="bold" align="center">Até logo!</m-text>
          <m-text align="center" size="xxxs">Você está saindo do Memoize. Bom descanso! Volte quando quiser continuar aprendendo no seu ritmo.</m-text>
        </m-stack>
        <img alt="Memoize" src="${image}" loading="lazy" />
        <m-button id="logOut" width="100%">Sair</m-button>
        <m-stack direction="column" align="center">
          <m-link href="${urlFor("dashboard")}">Voltar para o Dashboard</m-link>
        </m-stack>
      </auth>
    </m-main>
    <m-footer></m-footer>
  `;
}

export default component;
