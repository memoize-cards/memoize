import { html } from "standard/dom";
import { urlFor } from "standard/router";

function component() {
  return html`
    <memo-header>
      <memo-button id="goBack" variant="link" slot="leading">
        <memo-icon use="arrowBack"></memo-icon>
      </memo-button>
    </memo-header>
  `;
}

export default component;
