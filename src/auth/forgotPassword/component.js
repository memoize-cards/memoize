import { html } from "standard/dom";
import { urlFor } from "standard/router";

function component() {
  return html`
    <m-header>
      <m-button id="backToForgotPassword" variant="link" slot="leading">
        <m-icon use="arrowBack"></m-icon>
        <m-redirect href="${urlFor("signIn")}" on="backToForgotPassword/click:method/go"></m-redirect>
      </m-button>
    </m-header>
    <m-main>
      <auth>
        <m-logo></m-logo>
        <m-stack direction="column" spacing="none" align="center">
          <m-text color="master-darker" family="highlight" size="md" weight="bold" align="center">Tudo bem, isso acontece!</m-text>
          <m-text align="center" size="xxxs">Vamos te ajudar a recuperar o acesso. Informe seu e-mail abaixo</m-text>
        </m-stack>
        <m-form>
          <template>
            <m-input label="E-mail" name="email" type="email" required>
              <m-validity state="typeMismatch">E-mail inválido</m-validity>
              <m-validity state="valueMissing">E-mail é obrigatório</m-validity>
            </m-input>
            <m-button width="100%">Enviar link de recuperação</m-button>
          </template>
        </m-form>
        <m-stack direction="column" align="center">
          <m-link href="${urlFor("signIn")}">Voltar para o login</m-link>
        </m-stack>
      </auth>
    </m-main>
    <m-footer></m-footer>
  `;
}

export default component;
