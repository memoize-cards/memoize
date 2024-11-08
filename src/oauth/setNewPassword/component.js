import { html } from "standard/dom";
import { urlFor } from "standard/router";

function component() {
  return html`
    <memo-header>
      <memo-button id="backToSignIn" variant="link" slot="leading">
        <memo-icon use="arrowBack"></memo-icon>
        <memo-redirect href="${urlFor("signIn")}" on="backToSignIn/click:method/go"></memo-redirect>
      </memo-button>
    </memo-header>
    <memo-main>
      <oauth>
        <memo-logo></memo-logo>
        <memo-stack direction="column" spacing="nano">
          <memo-text color="master-darker" family="highlight" size="lg" weight="bold" align="center">Definir nova senha</memo-text>
          <memo-text align="center">Sua nova senha deve ser diferente das senhas anteriormente utilizadas</memo-text>
        </memo-stack>
        <memo-form>
          <template>
            <memo-input label="Senha" name="password" type="password" required>
              <memo-validity state="valueMissing">Senha eh obrigatorio</memo-validity>
            </memo-input>
            <memo-button width="100%">Definir nova senha</memo-button>
          </template>
        </memo-form>
        <memo-stack direction="column" align="center">
          <memo-link href="${urlFor("signIn")}">Voltar para a tela de Log in</memo-link>
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
