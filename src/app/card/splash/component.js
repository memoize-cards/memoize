import { html } from "standard/dom";
import image from "./image.svg";

function component() {
  return html`
    <m-stack id="splash" direction="column">
      <img alt="Memoize" src="${image}" loading="auto" />
      <m-button value="true" width="100%">Mostrar resposta</m-button>
      <m-info>Use este momento para testar seu conhecimento antes de revelar a resposta</m-info>
    </m-stack>
  `;
}

export default component;
