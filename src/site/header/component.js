import { html } from "standard/dom";

function component(self) {
  return html`
    <header>
      <mc-logo></mc-logo>
      <trailing>
        <mc-button variant="secondary">Sign in</mc-button>
        <mc-button>Sign up</mc-button>
      </trailing>
    </header>
  `;
}

export default component;
