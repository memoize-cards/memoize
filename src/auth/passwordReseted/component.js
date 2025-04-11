import { html } from "standard/dom";
import { urlFor } from "standard/router";

function component() {
  return html`
    <m-header>
      <m-button id="backToForgotPassword" variant="link" slot="leading">
        <m-icon use="arrowBack"></m-icon>
        <m-redirect href="${urlFor("forgotPassword")}" on="backToForgotPassword/click:method/go"></m-redirect>
      </m-button>
    </m-header>
    <m-main>
      <oauth>
        <m-logo></m-logo>
        <m-stack direction="column" spacing="none" align="center">
          <m-text color="master-darker" family="highlight" size="md" weight="bold" align="center">Redefinição de senha</m-text>
          <m-text align="center" size="xxxs">Sua senha foi redefinida com sucesso. Clique abaixo para fazer login de forma rápida e segura.</m-text>
        </m-stack>
        <m-button id="continue" width="100%">
          Continuar
          <m-redirect href="${urlFor("signIn")}" on="continue/click:method/go"></m-redirect>
        </m-button>
        <m-stack direction="column" align="center">
          <m-link href="${urlFor("signIn")}">Voltar para a tela de login</m-link>
        </m-stack>
      </oauth>
    </m-main>
    <m-footer></m-footer>
  `;
}

export default component;
