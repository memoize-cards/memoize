import "./header";
import { html } from "standard/dom";

function component() {
  return html`
    <m-create-card-header></m-create-card-header>
    <m-main>
      <app>
        <m-text color="master-darker" size="md" weight="bold" family="highlight">
          Nova revisão
        </m-text>
        <m-form>
          <template>
            <m-input label="Pergunta" name="front" maxlength="128" required>
              <m-validity state="valueMissing">Pergunta é obrigatório</m-validity>
              <m-text size="xxxs" color="info">Digite a pergunta ou conceito a ser revisado.</m-text>
            </m-input>
            <m-area label="Reposta" name="back" maxlength="1024" required>
              <m-validity state="valueMissing">Resumo é obrigatório</m-validity>
              <m-text size="xxxs" color="info">Insira a resposta ou explicaçâo para esta pergunta.</m-text>
            </m-area>
            <m-button width="100%">
              Criar revisão
            </m-button>
          </template>
        </m-form>
      </app>
    </m-main>
    <m-footer></m-footer>
  `;
}

export default component;
