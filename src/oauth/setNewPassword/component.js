import { html } from "standard/dom";
import { args, urlFor } from "standard/router";

function component() {
  return html`
    <m-header>
      <m-button id="backToSignIn" variant="link" slot="leading">
        <m-icon use="arrowBack"></m-icon>
        <m-redirect href="${urlFor("signIn")}" on="backToSignIn/click:method/go"></m-redirect>
      </m-button>
    </m-header>
    <m-main>
      <oauth>
        <m-logo></m-logo>
        <m-stack direction="column" spacing="nano" align="center">
          <m-text color="master-darker" family="highlight" size="lg" weight="bold" align="center">Definir nova senha</m-text>
          <m-text align="center">Sua nova senha deve ser diferente das senhas anteriormente utilizadas.</m-text>
        </m-stack>
        <m-form>
          <template>
            <m-input label="Senha" name="password" type="password" required>
              <m-validity state="valueMissing">Senha é obrigatória</m-validity>
            </m-input>
            <m-button width="100%">Definir nova senha</m-button>
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
