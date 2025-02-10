import { html } from "standard/dom";

function component(self) {
  return html`
    <img
      alt="${self.alt}"
      src="${self.src}"
      onerror="this.remove()"
      loading="auto" />
  `;
}

export default component;
