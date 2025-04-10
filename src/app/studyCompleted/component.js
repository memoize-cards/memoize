import { html } from "standard/dom";
import image from "./image.svg";

function component() {
  return html`
    <m-header>
      <m-button variant="link" slot="leading">
        <m-icon use="arrowBack"></m-icon>
      </m-button>
    </m-header>
    <m-main>
      <app>
        <m-stack direction="column" spacing="none" align="center">
          <m-text color="master-darker" family="highlight" size="md" weight="bold" align="center">Estudo concluído</m-text>
          <m-text color="master-dark" size="xxxs" align="center">Você terminou de estudar este topico. Volte mais tarde para revisar novamente</m-text>
        </m-stack>
        <img alt="Memoize" src="${image}" loading="lazy" />
        <m-button width="100%">Continuar</m-button>
      </app>
    </m-main>
    <m-footer></m-footer>
  `;
}

export default component;
