import { html } from "standard/dom";
import { args, urlFor } from "standard/router";

function component() {
  return html`
    <memo-header>
      <memo-button id="backToForgotPassword" variant="link" slot="leading">
        <memo-icon use="arrowBack"></memo-icon>
        <memo-redirect href="${urlFor("forgotPassword")}" on="backToForgotPassword/click:method/go"></memo-redirect>
      </memo-button>
    </memo-header>
    <memo-main>
      <oauth>
        <memo-logo></memo-logo>
        <memo-stack direction="column" spacing="nano" align="center">
          <memo-text color="master-darker" family="highlight" size="lg" weight="bold" align="center">Redefinição de senha</memo-text>
          <memo-text align="center">Sua senha foi redefinida com sucesso. Clique abaixo para fazer login de forma rápida e segura.</memo-text>
        </memo-stack>
        <memo-button id="continue" width="100%">
          Continuar
          <memo-redirect href="${urlFor("signIn")}" on="continue/click:method/go"></memo-redirect>
        </memo-button>
        <memo-stack direction="column" align="center">
          <memo-link href="${urlFor("signIn")}">Voltar para a tela de login</memo-link>
        </memo-stack>
      </oauth>
    </memo-main>
    <memo-footer></memo-footer>
  `;
}

export default component;
