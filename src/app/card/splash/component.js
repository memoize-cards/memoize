import { html } from "standard/dom";
import image from "./image.svg";

function component() {
  return html`
    <memo-stack id="splash" direction="column">
      <img alt="Memoize" src="${image}" loading="auto" />
      <memo-button value="true" width="100%">Mostrar resposta</memo-button>
      <memo-info>Use este momento para testar seu conhecimento antes de revelar a resposta</memo-info>
    </memo-stack>
  `;
}

export default component;
