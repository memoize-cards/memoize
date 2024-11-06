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
          <memo-text color="master-darker" family="highlight" size="lg" weight="bold" align="center">Aprenda, Memorize & Domine!</memo-text>
          <memo-text align="center">Um aplicativo avançado de flashcard projetado para otimizar o processo de aprendizado e memorização.</memo-text>
        </memo-stack>
        <img alt="Memoize" src="${image}" loading="lazy" />
        <memo-stack direction="column">
          <memo-button id="signIn" width="100%">
            Entrar
            <memo-redirect href="${urlFor("signIn")}" on="signIn/click:method/go"></memo-redirect>
          </memo-button>
          <memo-button variant="naked" width="100%">Instalar aplicativo</memo-button>
        </memo-stack>
      </site>
    </memo-main>
    <memo-footer>
      <memo-text slot="leading">© 2024 Memoize. Todos os direitos reservados.</memo-text>
      <memo-button slot="trailing" variant="link">
        <memo-icon use="language"></memo-icon>
      </memo-button>
    </memo-footer>
  `;
}

export default component;
