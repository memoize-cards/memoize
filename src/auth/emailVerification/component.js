import { html } from "standard/dom";
import { args, urlFor } from "standard/router";

function component() {
  return html`
    <m-header>
      <m-button id="backToForgotPassword" variant="link" slot="leading">
        <m-icon use="arrowBack"></m-icon>
        <m-redirect href="${urlFor("forgotPassword")}" on="backToForgotPassword/click:method/go"></m-redirect>
      </m-button>
    </m-header>
    <m-main>
      <auth>
        <m-logo></m-logo>
        <m-stack direction="column" spacing="none" align="center">
          <m-text color="master-darker" family="highlight" size="md" weight="bold" align="center">Verifique seu e-mail</m-text>
          <m-text align="center" size="xxxs">Enviamos um link para redefinir sua senha para o endereço de e-mail abaixo:</m-text>
          <m-text weight="bold" align="center">${args.email}</m-text>
        </m-stack>
        <m-button id="openEmailApp" width="100%">Abrir aplicativo de e-mail</m-button>
        <m-stack direction="column" align="center">
          <m-text align="center">Não recebeu o e-mail? <m-link id="resend">Clique aqui para reenviar</m-link></m-text>
          <m-link href="${urlFor("signIn")}">Voltar para a tela de login</m-link>
        </m-stack>
      </auth>
    </m-main>
    <m-footer></m-footer>
  `;
}

export default component;
