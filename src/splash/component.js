import { html } from "standard/dom";
import { urlFor } from "standard/router";
import image from "./image.svg";

function component() {
  return html`
    <m-header>
      <m-logo slot="leading"></m-logo>
    </m-header>
    <m-main>
      <splash>
        <img alt="Memoize" src="${image}" loading="lazy" />
        <m-stack direction="column" spacing="nano">
          <hat>Pare de esquecer</hat>
          <m-text color="master-darker" family="highlight" size="md" weight="bold">Memorize <m-text color="primary" family="highlight" size="md" weight="bold">5x mais rápido!</m-text></m-text>
          <m-text size="xxxs">Estudando para uma prova, concurso ou precisando lembrar informações essenciais no trabalho? O <strong>Memoize</strong> usa a ciência da memorização para garantir que você <strong>aprenda de verdade e nunca mais esqueça o que importa</strong>.</m-text>
        </m-stack>
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
