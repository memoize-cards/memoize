import { html } from "standard/dom";
import { urlFor } from "standard/router";
import image from "./image.svg";

function component() {
  return html`
    <m-main>
      <splash>
        <m-logo></m-logo>
        <m-stack direction="column" spacing="none" align="center">
          <m-text color="master-darker" family="highlight" size="md" weight="bold">Aprenda <m-text color="primary" family="highlight" size="md" weight="bold">5x mais rápido!</m-text></m-text>
          <m-text align="center" size="xxxs">Com a ciência da repetição espaçada, você obtém uma retenção de conhecimento superior. Domine qualquer assunto <m-text size="xxxs" weight="bold">2 a 5 vezes mais rápido que os métodos tradicionais</m-text></m-text>
        </m-stack>
        <img alt="Memoize" src="${image}" loading="lazy" />
        <m-stack direction="column">
          <m-button id="signIn" width="100%">
            Entrar
            <m-redirect href="${urlFor("signIn")}" on="signIn/click:method/go"></m-redirect>
          </m-button>
          <m-install></m-install>
        </m-stack>
      </splash>
    </m-main>
    <m-footer></m-footer>
  `;
}

export default component;
