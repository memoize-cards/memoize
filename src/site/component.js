import { html } from "standard/dom";
import { urlFor } from "standard/router";
import image from "./image.svg";

function component() {
  return html`
    <memo-main>
      <site>
        <memo-logo></memo-logo>
        <memo-stack direction="column" spacing="nano" align="center">
          <memo-text color="master-darker" family="highlight" size="lg" weight="bold">Aprenda <memo-text color="primary" family="highlight" size="lg" weight="bold">5x mais rápido!</memo-text></memo-text>
          <memo-text align="center">Com a ciência da repetição espaçada, você obtém uma retenção de conhecimento superior. Domine qualquer assunto <memo-text weight="bold">2 a 5 vezes mais rápido que os métodos tradicionais</memo-text></memo-text>
        </memo-stack>
        <img alt="Memoize" src="${image}" loading="lazy" />
        <memo-stack direction="column">
          <memo-button id="signIn" width="100%">
            Entrar
            <memo-redirect href="${urlFor("signIn")}" on="signIn/click:method/go"></memo-redirect>
          </memo-button>
          <memo-install></memo-install>
        </memo-stack>
      </site>
    </memo-main>
    <memo-footer></memo-footer>
  `;
}

export default component;
