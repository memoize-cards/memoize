import { html } from "standard/dom";
import { urlFor } from "standard/router";

function component(self) {
  return html`
    <memo-header>
      <memo-avatar slot="leading" src="${self.avatar}" alt="${self.name}"></memo-avatar>
      <memo-stack slot="leading" direction="column" spacing="quarck">
        <memo-text color="master-darker" size="xs" weight="medium">${self.name}</memo-text>
        <memo-link href="${urlFor("signOut")}">Sign out</memo-link>
      </memo-stack>
    </memo-header>
    <memo-main>
      <app>
        app aqui
      </app>
    </memo-main>
    <memo-footer>
      <memo-text slot="leading">© 2024 Memoize. Todos os direitos reservados.</memo-text>
      <memo-button slot="trailing" variant="link">
        <memo-icon use="language"></memo-icon>
      </memo-button>
    </memo-footer>
  `;
}

export default component;
