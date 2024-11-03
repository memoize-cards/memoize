import { html } from "standard/dom";

function component() {
  return html`
    <hgroup>
      <slot></slot>
    </hgroup>
  `;
}

export default component;
