import "./header";
import { html } from "standard/dom";
import { urlFor } from "standard/router";

function component() {
  return html`
    <m-how-works-header></m-how-works-header>
    <m-main>
      <app>
        <m-text color="master-darker" size="md" weight="bold" family="highlight" align="center">
          Maximizamos sua retenção de conhecimento
        </m-text>
        <ul>
          <li>
            <span>1</span>
            <m-text color="master-darker" family="highlight" size="sm" weight="bold" align="center">
              Crie seus flashcards
            </m-text>
            <m-text color="master-dark" size="xxs" align="center">
              Adicione suas perguntas e respostas ao aplicativo, criando seus próprios flashcards.
            </m-text>
          </li>
          <li>
            <span>2</span>
            <m-text color="master-darker" family="highlight" size="sm" weight="bold" align="center">
              Estude regularmente
            </m-text>
            <m-text color="master-dark" size="xxs" align="center">
              Acesse a seção de estudo e revise seus flashcards conforme desejar. Tente responder às perguntas ou solucionar os problemas apresentados.
            </m-text>
          </li>
          <li>
            <span>3</span>
            <m-text color="master-darker" family="highlight" size="sm" weight="bold" align="center">
              Cuidamos do resto
            </m-text>
            <m-text color="master-dark" size="xxs" align="center">
              Não se preocupe com quando revisar cada flashcard. O aplicativo organizará automaticamente as revisões com base em sua dificuldade, garantindo uma prática eficiente e eficaz.
            </m-text>
          </li>
        </ul>
        <m-button id="createFirstDeck" width="100%">
          <m-icon color="currentColor" use="add"></m-icon>
          Criar coleção
          <m-redirect href="${urlFor("createDeck")}" on="createFirstDeck/click:method/go"></m-redirect>
        </m-button>
      </app>
    </m-main>
    <m-footer></m-footer>
  `;
}

export default component;
