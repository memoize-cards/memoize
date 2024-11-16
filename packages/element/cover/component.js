import { html } from "standard/dom";
import fallback from "./fallback.svg";

function component(self) {
  return html`
    <img
      alt="${self.alt}"
      src="${self.src}"
      onerror="this.src='${fallback}'"
      loading="auto" />
  `;
}

export default component;
