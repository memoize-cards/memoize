import { html } from "standard/dom";
import { urlFor } from "standard/router";

function component() {
  return html`
    <m-header>
      <m-button id="backToSignIn" variant="link" slot="leading">
        <m-icon use="arrowBack"></m-icon>
        <m-redirect href="${urlFor("signIn")}" on="backToSignIn/click:method/go"></m-redirect>
      </m-button>
    </m-header>
    <m-main>
      <auth>
        <m-logo></m-logo>
        <m-stack direction="column" spacing="none" align="center">
          <m-text color="master-darker" family="highlight" size="md" weight="bold" align="center">Vamos começar?</m-text>
          <m-text align="center" size="xxxs">Crie sua conta e desbloqueie uma nova forma de estudar</m-text>
        </m-stack>
        <m-form>
          <template>
            <m-input label="Nome" name="name" required>
              <m-validity state="valueMissing">Nome é obrigatório</m-validity>
            </m-input>
            <m-input label="Email" name="email" type="email" required>
              <m-validity state="typeMismatch">Email inválido</m-validity>
              <m-validity state="valueMissing">Email é obrigatório</m-validity>
            </m-input>
            <m-input label="Senha" name="password" type="password" minlength="6" autocomplete="off" required>
              <m-validity state="valueMissing">Senha é obrigatória</m-validity>
              <m-validity state="rangeUnderflow">A senha deve ter no mínimo 6 caracteres</m-validity>
            </m-input>
            <m-button width="100%">Criar conta</m-button>
          </template>
        </m-form>
        <m-stack direction="column" align="center">
          <m-text align="center">Já tem uma conta? <m-link href="${urlFor("signIn")}">Entrar aqui</m-link></m-text>
        </m-stack>
      </auth>
    </m-main>
    <m-footer></m-footer>
  `;
}

export default component;
