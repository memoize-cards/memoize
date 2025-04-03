import { html } from "standard/dom";
import { params, urlFor } from "standard/router";

function component(self) {
  return html`
    <m-stack direction="column">
      <m-stack justify="space-between" align="center">
        <m-text size="sm" family="highlight" weight="bold" color="master-darker">Revisões</m-text>
        <m-button id="goToCreateCard" variant="ghost">
          <m-icon color="currentColor" use="add"></m-icon>
          Criar revisão
          <m-redirect href="${urlFor("createCard", params)}" on="goToCreateCard/click:method/go"></m-redirect>
        </m-button>
      </m-stack>
      <m-stack direction="column" spacing="nano">
        ${self.cards.map(
          (card) => html`
            <card>
              <m-link href="${urlFor("editCard", { ...params, card: card.id })}">${card.front}</m-link>
            </card>
          `,
        )}
      </m-stack>
    </m-stack>
  `;
}

export default component;
