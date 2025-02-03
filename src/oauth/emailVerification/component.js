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
        <memo-stack direction="column" spacing="nano">
          <memo-text color="master-darker" family="highlight" size="lg" weight="bold" align="center">Verifique seu e-mail</memo-text>
          <memo-text align="center">Enviamos um link para redefinir sua senha para o endereço de e-mail abaixo:</memo-text>
          <memo-text weight="bold" align="center">${args.email}</memo-text>
        </memo-stack>
        <memo-button id="openEmailApp" width="100%">Abrir aplicativo de e-mail</memo-button>
        <memo-stack direction="column" align="center">
          <memo-text align="center">Não recebeu o e-mail? <memo-link id="resend">Clique aqui para reenviar</memo-link></memo-text>
          <memo-link href="${urlFor("signIn")}">Voltar para a tela de login</memo-link>
        </memo-stack>
      </oauth>
    </memo-main>
    <memo-footer></memo-footer>
  `;
}

export default component;
