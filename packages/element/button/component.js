import { html } from "standard/dom";

function component(self) {
  return html`
    <button>
      <slot></slot>
    </button>
  `;
}

export default component;
