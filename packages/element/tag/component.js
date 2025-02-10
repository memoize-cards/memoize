import { html } from "standard/dom";

function component() {
  return html`
    <span>
      <slot></slot>
    </span>
  `;
}

export default component;
