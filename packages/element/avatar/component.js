import { html } from "standard/dom";

function component(self) {
  return html`
    <img
      alt="${self.alt}"
      src="${self.src}"
      onerror="this.remove()"
      loading="${self.loading}" />
  `;
}

export default component;
