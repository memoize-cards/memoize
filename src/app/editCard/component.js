import "./header";
import { html } from "standard/dom";

function component(self) {
  return html`
    <m-edit-card-header></m-edit-card-header>
    <m-main>
      <app>
        <m-text color="master-darker" size="md" weight="bold" family="highlight">
          Atualizar revisão
        </m-text>
        <m-form>
          <template>
            <m-input label="Pergunta" name="front" maxlength="128" value="${self.card.front}" required>
              <m-validity state="valueMissing">Pergunta é obrigatório</m-validity>
              <m-text size="xxxs" color="info">Digite a pergunta ou conceito a ser revisado.</m-text>
            </m-input>
            <m-area label="Reposta" name="back" maxlength="1024" required>
              <template>${self.card.back}</template>
              <m-validity state="valueMissing">Resumo é obrigatório</m-validity>
              <m-text size="xxxs" color="info">Insira a resposta ou explicaçâo para esta pergunta.</m-text>
            </m-area>
            <m-button width="100%">
              Atualizar revisão
            </m-button>
          </template>
        </m-form>
      </app>
    </m-main>
    <m-footer></m-footer>
  `;
}

export default component;
