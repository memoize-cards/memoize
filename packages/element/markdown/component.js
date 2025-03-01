import { html } from "standard/dom";

function component(self) {
  console.log(self.querySelector("template").innerHTML);
  return html`
    ${self.querySelector("template").innerHTML}
  `;
}

export default component;
