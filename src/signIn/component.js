import { html } from "standard/dom";
import { urlFor } from "standard/router";

function component() {
  return html`
    <memo-header>
      <memo-button id="backToSite" variant="link" slot="leading">
        <memo-icon use="arrowBack"></memo-icon>
        <memo-redirect href="${urlFor("site")}" on="backToSite/click:method/go"></memo-redirect>
      </memo-button>
    </memo-header>
    <memo-main>
      <signin>
        <memo-logo></memo-logo>
        <memo-hgroup align="center">
          <memo-text color="master-darker" family="highlight" size="lg" weight="bold">Faça login na sua conta</memo-text>
          <memo-text>Bem-vindo de volta! Por favor, insira seus dados</memo-text>
        </memo-hgroup>
        <memo-form>
          <template>
            <memo-input label="Email" name="email" type="email" required>
              <memo-validity state="typeMismatch">Email invalido</memo-validity>
              <memo-validity state="valueMissing">Email eh obrigatorio</memo-validity>
            </memo-input>
            <memo-input label="Senha" name="password" type="password" autocomplete="off" required>
              <memo-validity state="valueMissing">Email eh obrigatorio</memo-validity>
            </memo-input>
            <memo-button width="100%">Entrar</memo-button>
          </template>
        </memo-form>
        <memo-button variant="naked" width="100%">Entrar com Google</memo-button>
      </signin>
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
