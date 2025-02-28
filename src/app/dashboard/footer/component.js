import { html } from "standard/dom";
import { urlFor } from "standard/router";

function component() {
  return html`
    <m-footer>
      <m-button id="goToSignOut" variant="link" slot="trailing">
        Sair
        <m-redirect href="${urlFor("signOut")}" on="goToSignOut/click:method/go"></m-redirect>
      </m-button>
    </m-footer>
  `;
}

export default component;
