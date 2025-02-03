import { html } from "standard/dom";
import { urlFor } from "standard/router";
import image from "./image.svg";

function component() {
  return html`
    <memo-header></memo-header>
    <memo-main>
      <site>
        <memo-logo></memo-logo>
        <memo-stack direction="column" spacing="nano">
          <memo-text color="master-darker" family="highlight" size="lg" weight="bold" align="center">Aprenda, Memorize e Domine!</memo-text>
          <memo-text align="center">Um aplicativo de flashcards avançado projetado para otimizar seu aprendizado e memorização.</memo-text>
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
