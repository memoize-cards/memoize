import { html } from "standard/dom";

function component(self) {
  return html`
    ${self.message}
  `;
}

export default component;
