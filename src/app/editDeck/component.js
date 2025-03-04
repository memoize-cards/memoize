import "./header";

import { html } from "standard/dom";

function component(self) {
  return html`
    <m-edit-deck-header></m-edit-deck-header>
    <m-main>
      <app>
        <m-text color="master-darker" size="md" weight="bold" family="highlight">
          Atualizar coleção
        </m-text>
        <m-form>
          <template>
            <m-input id="cover" label="Imagem de capa (URL)" name="cover" type="url" maxlength="256" value="${self.deck.cover}">
              <m-cover slot="preview" aspect="wide" src="${self.deck.cover}" on="cover/change:attribute/src"></m-cover>
              <m-validity state="typeMismatch">URL inválida</m-validity>
              <m-text size="xxxs" color="info">Insira o link de uma imagem para representar a coleção.</m-text>
            </m-input>
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
      </app>
    </m-main>
    <m-footer></m-footer>
  `;
}

export default component;
