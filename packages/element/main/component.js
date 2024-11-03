import { html } from "standard/dom";

function component() {
  return html`
    <main>
      <container>
        <slot></slot>
      </container>
    </main>
  `;
}

export default component;
