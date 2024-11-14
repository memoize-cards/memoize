import { html } from "standard/dom";
import { urlFor } from "standard/router";

function component(self) {
  return html`
    <memo-header>
      <memo-button id="backToDashboard" variant="link" slot="leading">
        <memo-icon use="arrowBack"></memo-icon>
        <memo-redirect href="${urlFor("dashboard")}" on="backToDashboard/click:method/go"></memo-redirect>
      </memo-button>
    </memo-header>
    <memo-main>
      <app>
        <memo-text color="master-darker" size="md" weight="bold" family="highlight">
          Nova coleção
        </memo-text>
        <memo-form>
          <template>
            <memo-input label="Nome" name="name" required>
              <memo-validity state="valueMissing">Nome eh obrigatorio</memo-validity>
            </memo-input>
            <memo-area label="Descricao" name="description"></memo-area>
            <memo-button width="100%">
              Criar coleção
            </memo-button>
          </template>
        </memo-form>
      </app>
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
