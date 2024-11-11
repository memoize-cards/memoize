import { html } from "standard/dom";
import { urlFor } from "standard/router";

function component(self) {
  return html`
    <memo-header color="primary">
      <memo-button id="backToDashboard" variant="link" slot="leading">
        <memo-icon use="arrowBack" color="master-lightest"></memo-icon>
        <memo-redirect href="${urlFor("dashboard")}" on="backToDashboard/click:method/go"></memo-redirect>
      </memo-button>
    </memo-header>
    <memo-main color="primary">
      <app>
        <memo-text color="master-lightest" size="md" weight="bold" family="highlight" align="center">
          Maximizamos sua retenção de conhecimento
        </memo-text>
        <ul>
          <li>
            <span>1</span>
            <memo-text color="master-lightest" size="sm" weight="medium" align="center">
              Crie seus flashcards
            </memo-text>
            <memo-text color="master-lightest" size="xxs" align="center">
              Adicione suas perguntas e respostas ao aplicativo, criando seus próprios flashcards.
            </memo-text>
          </li>
          <li>
            <span>2</span>
            <memo-text color="master-lightest" size="sm" weight="medium" align="center">
              Estude regularmente
            </memo-text>
            <memo-text color="master-lightest" size="xxs" align="center">
              Acesse a seção de estudo e revise seus flashcards conforme desejar. Tente responder às perguntas ou solucionar os problemas apresentados.
            </memo-text>
          </li>
          <li>
            <span>3</span>
            <memo-text color="master-lightest" size="sm" weight="medium" align="center">
              Cuidamos do resto
            </memo-text>
            <memo-text color="master-lightest" size="xxs" align="center">
              Não se preocupe com quando revisar cada flashcard. O aplicativo organizará automaticamente as revisões com base em sua dificuldade, garantindo uma prática eficiente e eficaz.
            </memo-text>
          </li>
        </ul>
        <memo-button id="createFirstDeck" variant="ghost" width="100%">
          <memo-icon use="add"></memo-icon>
          Criar coleção
          <memo-redirect href="${urlFor("createDeck")}" on="createFirstDeck/click:method/go"><memo-redirect>
        </memo-button>
      </app>
    </memo-main>
    <memo-footer color="primary">
      <memo-text slot="leading" color="master-lightest">© 2024 Memoize. Todos os direitos reservados.</memo-text>
      <memo-button slot="trailing" variant="link">
        <memo-icon use="language" color="master-lightest"</memo-icon>
      </memo-button>
    </memo-footer>
  `;
}

export default component;
