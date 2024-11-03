import { html } from "standard/dom";

function component() {
  return html`
    <memo-header></memo-header>
    <memo-main>
      <signin>
        <memo-logo></memo-logo>
        <memo-hgroup align="center">
          <memo-text color="master-darker" family="highlight" size="lg" weight="bold">Aprenda, Memorize & Domine!</memo-text>
          <memo-text>Um aplicativo avançado de flashcard projetado para otimizar o processo de aprendizado e memorização.</memo-text>
        </memo-hgroup>
        <memo-stack direction="column">
          <memo-button width="100%">Entrar</memo-button>
          <memo-button variant="naked" width="100%">Instalar aplicativo</memo-button>
        </memo-stack>
      </signin>
    </memo-main>
    <memo-footer></memo-footer>
  `;
}

export default component;
