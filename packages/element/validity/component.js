import { html } from "standard/dom";

function component() {
  return html`
    <slot></slot>
  `;
}

export default component;
