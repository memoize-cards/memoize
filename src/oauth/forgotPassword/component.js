import { html } from "standard/dom";
import { args, urlFor } from "standard/router";

function component() {
  return html`
    <memo-header>
      <memo-button id="backToForgotPassword" variant="link" slot="leading">
        <memo-icon use="arrowBack"></memo-icon>
        <memo-redirect href="${urlFor("signIn")}" on="backToForgotPassword/click:method/go"></memo-redirect>
      </memo-button>
    </memo-header>
    <memo-main>
      <oauth>
        <memo-logo></memo-logo>
        <memo-stack direction="column" spacing="nano">
          <memo-text color="master-darker" family="highlight" size="lg" weight="bold" align="center">Esqueceu a senha?</memo-text>
          <memo-text align="center">Não se preocupe! Enviaremos instruções de redefinição para o seu e-mail abaixo:</memo-text>
        </memo-stack>
        <memo-form>
          <template>
            <memo-input label="E-mail" name="email" type="email" required>
              <memo-validity state="typeMismatch">E-mail inválido</memo-validity>
              <memo-validity state="valueMissing">E-mail é obrigatório</memo-validity>
            </memo-input>
            <memo-button width="100%">Redefinir senha</memo-button>
          </template>
        </memo-form>
        <memo-stack direction="column" align="center">
          <memo-link href="${urlFor("signIn")}">Voltar para a tela de login</memo-link>
        </memo-stack>
      </oauth>
    </memo-main>
    <memo-footer></memo-footer>
  `;
}

export default component;
