import { html } from "standard/dom";

function component(self) {
  return html`
    <header>
      <leading>
        <memo-logo></memo-logo>
      </leading>
      <trailing>
        <memo-button variant="primary">Get Started</memo-button>
      </trailing>
    </header>
  `;
}

export default component;
