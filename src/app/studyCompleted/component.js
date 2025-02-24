import { html } from "standard/dom";
import image from "./image.svg";

function component() {
  return html`
    <memo-header>
      <memo-button variant="link" slot="leading">
        <memo-icon use="arrowBack"></memo-icon>
      </memo-button>
    </memo-header>
    <memo-main>
      <app>
        <memo-stack direction="column" spacing="nano" align="center">
          <memo-text color="master-darker" family="highlight" size="lg" weight="bold" align="center">Estudo concluído</memo-text>
          <memo-text align="center">Você terminou de estudar este topico. Volte mais tarde para revisar novamente</memo-text>
        </memo-stack>
        <img alt="Memoize" src="${image}" loading="lazy" />
        <memo-button width="100%">Continuar</memo-button>
      </app>
    </memo-main>
    <memo-footer></memo-footer>
  `;
}

export default component;
