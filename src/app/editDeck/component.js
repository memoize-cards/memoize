import { html } from "standard/dom";
import { urlFor } from "standard/router";

function component(self) {
  return html`
    <m-header>
      <m-button id="backToDeck" variant="link" slot="leading">
        <m-icon use="arrowBack"></m-icon>
        <m-redirect href="${urlFor("deck", { deck: self.deck.id })}" on="backToDeck/click:method/go"></m-redirect>
      </m-button>
    </m-header>
    <m-main>
      <app>
        <m-text color="master-darker" size="md" weight="bold" family="highlight">
          Atualizar coleção
        </m-text>
        <m-form>
          <template>
            <m-input id="cover" label="Imagem de capa (URL)" name="cover" type="url" maxlength="256" value="${self.deck.cover}">
              <m-validity state="typeMismatch">URL inválida</m-validity>
              <m-text size="xxxs" color="info">Insira o link de uma imagem para representar a coleção.</m-text>
            </m-input>
            <m-cover aspect="wide" src="${self.deck.cover}" on="cover/change:attribute/src"></m-cover>
            <m-input label="Nome" name="name" maxlength="64" value="${self.deck.name}" required>
              <m-validity state="valueMissing">Nome é obrigatório</m-validity>
              <m-text size="xxxs" color="info">Escolha um nome curto e descritivo para sua coleção.</m-text>
            </m-input>
            <m-area label="Descrição" name="description" maxlength="256" value="${self.deck.description}">
              <m-text size="xxxs" color="info">Adicione uma breve descrição sobre o conteúdo desta coleção.</m-text>
            </m-area>
            <m-button width="100%">
              Atualizar coleção
            </m-button>
          </template>
        </m-form>
        <m-stack justify="center">
          <m-button id="deleteDeck" color="danger" variant="link">Excluir coleção</m-button>
        </m-stack>
      </app>
    </m-main>
    <m-footer></m-footer>
  `;
}

export default component;
