import { html } from "standard/dom";
import language from "./language.svg";

function component(self) {
  return html`
    <img alt="Language" src="${language}" loading="lazy" />
  `;
}

export default component;
