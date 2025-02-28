import { html } from "standard/dom";
import { urlFor } from "standard/router";
import logo from "./google.svg";

function component() {
  return html`
    <m-header>
      <m-button id="backToSite" variant="link" slot="leading">
        <m-icon use="arrowBack"></m-icon>
        <m-redirect href="${urlFor("site")}" on="backToSite/click:method/go"></m-redirect>
      </m-button>
    </m-header>
    <m-main>
      <oauth>
        <m-logo></m-logo>
        <m-stack direction="column" spacing="nano" align="center">
          <m-text color="master-darker" family="highlight" size="lg" weight="bold" align="center">Faça login na sua conta</m-text>
          <m-text align="center">Bem-vindo de volta! Por favor, insira seus dados</m-text>
        </m-stack>
        <m-form>
          <template>
            <m-input label="E-mail" name="email" type="email" required>
              <m-validity state="typeMismatch">E-mail inválido</m-validity>
              <m-validity state="valueMissing">E-mail é obrigatório</m-validity>
            </m-input>
            <m-input label="Senha" name="password" type="password" autocomplete="off" required>
              <m-validity state="valueMissing">Senha é obrigatória</m-validity>
            </m-input>
            <m-button width="100%">Entrar</m-button>
          </template>
        </m-form>
        <m-button id="logInWithGoogle" variant="naked" width="100%">
          <img src="${logo}" alt="Google" loading="lazy" />
          Entrar com Google
        </m-button>
        <m-stack direction="column" align="center">
          <m-link href="${urlFor("forgotPassword")}">Esqueceu a senha?</m-link>
          <m-text align="center">Não tem uma conta? <m-link href="${urlFor("signUp")}">Criar conta</m-link></m-text>
        </m-stack>
      </oauth>
    </m-main>
    <m-footer>
      <m-text slot="leading">© 2024 Memoize. Todos os direitos reservados.</m-text>
      <m-button slot="trailing" variant="link">
        <m-icon use="language"></m-icon>
      </m-button>
    </m-footer>
  `;
}

export default component;
