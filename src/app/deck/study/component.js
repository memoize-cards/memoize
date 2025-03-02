import { html } from "standard/dom";

function component(self) {
  return html`
    <button>${self.value}</button>
  `;
}

export default component;
