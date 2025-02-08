import { html } from "standard/dom";

function component(self) {
  return html`
    ${self.querySelector("template").innerHTML}
  `;
}

export default component;
