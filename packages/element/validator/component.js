import { html } from "@bake-js/-o-id/dom";

function component(self) {
  return html`
    <span class="required">
      ${self.message}
    </span>
  `;
}

export default component;
