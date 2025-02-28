import { html } from "standard/dom";
import { args, urlFor } from "standard/router";

function component() {
  return html`
    <m-header>
      <m-button id="backToForgotPassword" variant="link" slot="leading">
        <m-icon use="arrowBack"></m-icon>
        <m-redirect href="${urlFor("signIn")}" on="backToForgotPassword/click:method/go"></m-redirect>
      </m-button>
    </m-header>
    <m-main>
      <oauth>
        <m-logo></m-logo>
        <m-stack direction="column" spacing="nano" align="center">
          <m-text color="master-darker" family="highlight" size="lg" weight="bold" align="center">Esqueceu a senha?</m-text>
          <m-text align="center">Não se preocupe! Enviaremos instruções de redefinição para o seu e-mail abaixo:</m-text>
        </m-stack>
        <m-form>
          <template>
            <m-input label="E-mail" name="email" type="email" required>
              <m-validity state="typeMismatch">E-mail inválido</m-validity>
              <m-validity state="valueMissing">E-mail é obrigatório</m-validity>
            </m-input>
            <m-button width="100%">Redefinir senha</m-button>
          </template>
        </m-form>
        <m-stack direction="column" align="center">
          <m-link href="${urlFor("signIn")}">Voltar para a tela de login</m-link>
        </m-stack>
      </oauth>
    </m-main>
    <m-footer></m-footer>
  `;
}

export default component;
