import { html } from "standard/dom";
import { urlFor } from "standard/router";

function component(self) {
  return html`
    <memo-header>
      <memo-button id="backToDeck" variant="link" slot="leading">
        <memo-icon use="arrowBack"></memo-icon>
        <memo-redirect href="${urlFor("deck", { deck: self.deck })}" on="backToDeck/click:method/go"></memo-redirect>
      </memo-button>
    </memo-header>
    <memo-main>
      <app>
        <memo-text color="master-darker" size="md" weight="bold" family="highlight">
          Atualizar revisão
        </memo-text>
        <memo-form>
          <template>
            <memo-input label="Pergunta" name="front" value="${self.card.front}" required>
              <memo-validity state="valueMissing">Pergunta é obrigatório</memo-validity>
            </memo-input>
            <memo-area label="Reposta" name="back" value="${self.card.back}" required>
              <memo-validity state="valueMissing">Resumo é obrigatório</memo-validity>
            </memo-area>
            <memo-button width="100%">
              Atualizar revisão
            </memo-button>
          </template>
        </memo-form>
        <memo-stack justify="center">
          <memo-button id="deleteCard" color="danger" variant="link">Excluir revisão</memo-button>
        </memo-stack>
      </app>
    </memo-main>
    <memo-footer></memo-footer>
  `;
}

export default component;
