import { html } from "standard/dom";
import { urlFor } from "standard/router";

function component(self) {
  return html`
    <memo-header>
      <memo-button id="backToDeck" variant="link" slot="leading">
        <memo-icon use="arrowBack"></memo-icon>
        <memo-redirect href="${urlFor("deck", { deck: self.deck.id })}" on="backToDeck/click:method/go"></memo-redirect>
      </memo-button>
    </memo-header>
    <memo-main>
      <app>
        <memo-text color="master-darker" size="md" weight="bold" family="highlight">
          Atualizar coleção
        </memo-text>
        <memo-form>
          <template>
            <memo-cover aspect="wide"></memo-cover>
            <memo-input label="Nome" name="name" value="${self.deck.name}" required>
              <memo-validity state="valueMissing">Nome é obrigatório</memo-validity>
            </memo-input>
            <memo-area label="Descrição" name="description" value="${self.deck.description}"></memo-area>
            <memo-button width="100%">
              Atualizar coleção
            </memo-button>
          </template>
        </memo-form>
        <memo-stack justify="center">
          <memo-button id="deleteDeck" color="danger" variant="link">Excluir coleção</memo-button>
        </memo-stack>
      </app>
    </memo-main>
    <memo-footer></memo-footer>
  `;
}

export default component;
