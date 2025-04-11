import { html } from "standard/dom";
import { urlFor } from "standard/router";
import logo from "./google.svg";

function component() {
  return html`
    <m-header>
      <m-button id="backToSplash" variant="link" slot="leading">
        <m-icon use="arrowBack"></m-icon>
        <m-redirect href="${urlFor("splash")}" on="backToSplash/click:method/go"></m-redirect>
      </m-button>
    </m-header>
    <m-main>
      <auth>
        <m-logo></m-logo>
        <m-stack direction="column" spacing="none" align="center">
          <m-text color="master-darker" family="highlight" size="md" weight="bold" align="center">Bom te ver de novo!</m-text>
          <m-text align="center" size="xxxs">Entre na sua conta para continuar aprendendo com o Memoize</m-text>
        </m-stack>
        <m-button id="logInWithGoogle" variant="naked" width="100%">
          <img src="${logo}" alt="Google" loading="lazy" />
          Entrar com Google
        </m-button>
        <m-text color="master-dark" size="xxxs" weight="medium" align="center">ou</m-text>
        <m-form>
          <template>
            <m-input label="E-mail" name="email" type="email" required>
              <m-validity state="typeMismatch">E-mail inválido</m-validity>
              <m-validity state="valueMissing">E-mail é obrigatório</m-validity>
            </m-input>
            <m-input label="Senha" name="password" type="password" minlength="6" autocomplete="off" required>
              <m-validity state="valueMissing">Senha é obrigatória</m-validity>
              <m-validity state="rangeUnderflow">A senha deve ter no mínimo 6 caracteres</m-validity>
            </m-input>
            <m-button width="100%">Entrar</m-button>
          </template>
        </m-form>
        <m-stack direction="column" align="center">
          <m-link href="${urlFor("forgotPassword")}">Esqueceu sua senha?</m-link>
          <m-text align="center">Ainda não tem uma conta? <m-link href="${urlFor("signUp")}">Criar agora!</m-link></m-text>
        </m-stack>
      </auth>
    </m-main>
    <m-footer></m-footer>
  `;
}

export default component;
