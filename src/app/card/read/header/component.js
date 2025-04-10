import { html } from "standard/dom";
import { urlFor } from "standard/router";

function component() {
  return html`
    <m-header>
      <m-button id="goBack" variant="icon" slot="leading">
        <m-icon use="arrowBack"></m-icon>
      </m-button>
    </m-header>
  `;
}

export default component;
