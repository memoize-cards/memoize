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
          <memo-text color="master-darker" family="highlight" size="lg" weight="bold" align="center">Criar uma conta</memo-text>
          <memo-text align="center">Inicie sua avaliação gratuita</memo-text>
        </memo-stack>
        <memo-form>
          <template>
            <memo-input label="Nome" name="name" required>
              <memo-validity state="valueMissing">Nome é obrigatório</memo-validity>
            </memo-input>
            <memo-input label="Email" name="email" type="email" required>
              <memo-validity state="typeMismatch">Email inválido</memo-validity>
              <memo-validity state="valueMissing">Email é obrigatório</memo-validity>
            </memo-input>
            <memo-input label="Senha" name="password" type="password" autocomplete="off" required>
              <memo-validity state="valueMissing">Senha é obrigatória</memo-validity>
            </memo-input>
            <memo-button width="100%">Começar</memo-button>
          </template>
        </memo-form>
        <memo-stack direction="column" align="center">
          <memo-text align="center">Já tem uma conta? <memo-link href="${urlFor("signIn")}">Entrar</memo-link></memo-text>
        </memo-stack>
      </oauth>
    </memo-main>
    <memo-footer></memo-footer>
  `;
}

export default component;
