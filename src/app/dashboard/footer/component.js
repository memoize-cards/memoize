import { html } from "standard/dom";
import { urlFor } from "standard/router";

function component() {
  return html`
    <memo-footer>
      <memo-button id="goToSignOut" variant="link" slot="trailing">
        Sair
        <memo-redirect href="${urlFor("signOut")}" on="goToSignOut/click:method/go"></memo-redirect>
      </memo-button>
    </memo-footer>
  `;
}

export default component;
