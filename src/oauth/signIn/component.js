import { html } from "standard/dom";
import { urlFor } from "standard/router";
import logo from "./google.svg";

function component() {
  return html`
    <memo-header>
      <memo-button id="backToSite" variant="link" slot="leading">
        <memo-icon use="arrowBack"></memo-icon>
        <memo-redirect href="${urlFor("site")}" on="backToSite/click:method/go"></memo-redirect>
      </memo-button>
    </memo-header>
    <memo-main>
      <oauth>
        <memo-logo></memo-logo>
        <memo-stack direction="column" spacing="nano" align="center">
          <memo-text color="master-darker" family="highlight" size="lg" weight="bold" align="center">Faça login na sua conta</memo-text>
          <memo-text align="center">Bem-vindo de volta! Por favor, insira seus dados</memo-text>
        </memo-stack>
        <memo-form>
          <template>
            <memo-input label="E-mail" name="email" type="email" required>
              <memo-validity state="typeMismatch">E-mail inválido</memo-validity>
              <memo-validity state="valueMissing">E-mail é obrigatório</memo-validity>
            </memo-input>
            <memo-input label="Senha" name="password" type="password" autocomplete="off" required>
              <memo-validity state="valueMissing">Senha é obrigatória</memo-validity>
            </memo-input>
            <memo-button width="100%">Entrar</memo-button>
          </template>
        </memo-form>
        <memo-button id="logInWithGoogle" variant="naked" width="100%">
          <img src="${logo}" alt="Google" loading="lazy" />
          Entrar com Google
        </memo-button>
        <memo-stack direction="column" align="center">
          <memo-link href="${urlFor("forgotPassword")}">Esqueceu a senha?</memo-link>
          <memo-text align="center">Não tem uma conta? <memo-link href="${urlFor("signUp")}">Criar conta</memo-link></memo-text>
        </memo-stack>
      </oauth>
    </memo-main>
    <memo-footer>
      <memo-text slot="leading">© 2024 Memoize. Todos os direitos reservados.</memo-text>
      <memo-button slot="trailing" variant="link">
        <memo-icon use="language"></memo-icon>
      </memo-button>
    </memo-footer>
  `;
}

export default component;
