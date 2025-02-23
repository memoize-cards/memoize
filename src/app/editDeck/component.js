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
            <memo-input id="cover" label="Imagem de capa (URL)" name="cover" type="url" maxlength="256" value="${self.deck.cover}">
              <memo-validity state="typeMismatch">URL inválida</memo-validity>
              <memo-text size="xxxs" color="info">Insira o link de uma imagem para representar a coleção.</memo-text>
            </memo-input>
            <memo-cover aspect="wide" src="${self.deck.cover}" on="cover/change:attribute/src"></memo-cover>
            <memo-input label="Nome" name="name" maxlength="64" value="${self.deck.name}" required>
              <memo-validity state="valueMissing">Nome é obrigatório</memo-validity>
              <memo-text size="xxxs" color="info">Escolha um nome curto e descritivo para sua coleção.</memo-text>
            </memo-input>
            <memo-area label="Descrição" name="description" maxlength="256" value="${self.deck.description}">
              <memo-text size="xxxs" color="info">Adicione uma breve descrição sobre o conteúdo desta coleção.</memo-text>
            </memo-area>
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
