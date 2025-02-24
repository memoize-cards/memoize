import { html } from "standard/dom";
import { urlFor } from "standard/router";
import image from "./image.svg";

function component(self) {
  return html`
    <memo-header>
      <memo-button id="backToDashboard" variant="link" slot="leading">
        <memo-icon use="arrowBack"></memo-icon>
        <memo-redirect href="${urlFor("dashboard")}" on="backToDashboard/click:method/go"></memo-redirect>
      </memo-button>
    </memo-header>
    <memo-main>
      <app>
        <memo-stack direction="column" spacing="nano" align="center">
          <memo-text color="master-darker" family="highlight" size="lg" weight="bold" align="center">Estudo concluído</memo-text>
          <memo-text align="center">Você terminou de estudar este topico. Volte mais tarde para revisar novamente</memo-text>
        </memo-stack>
        <img alt="Memoize" src="${image}" loading="lazy" />
        <memo-button id="continueToDashboard" width="100%">
          Continuar
          <memo-redirect href="${urlFor("dashboard")}" on="continueToDashboard/click:method/go"></memo-redirect>
        </memo-button>
      </app>
    </memo-main>
    <memo-footer></memo-footer>
  `;
}

export default component;
