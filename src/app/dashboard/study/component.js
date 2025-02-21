import { html } from "standard/dom";
import { urlFor } from "standard/router";
import imageEmpty from "./image-empty.svg";
import imageFull from "./image-full.svg";

function component(self) {
  return self.total
    ? html`
      <img src="${imageFull}" alt="Memoize" loading="auto" />
      <memo-stack direction="column">
        <memo-stack direction="column" spacing="">
          <memo-text family="highlight" size="sm" color="master-darker" weight="bold">Você tem revisões!</memo-text>
          <memo-text>${self.total} revisões aguardando você</memo-text>
        </memo-stack>
        <memo-button id="goToDeck">
          Revisar agora
          <memo-redirect href="${urlFor("card")}" on="goToDeck/click:method/go"></memo-redirect>
        </memo-button>
      </memo-stack>
    `
    : html`
      <img src="${imageEmpty}" alt="Memoize" loading="auto" />
      <memo-stack direction="column">
        <memo-stack direction="column" spacing="">
          <memo-text family="highlight" size="sm" color="master-darker" weight="bold">Estudo concluído</memo-text>
          <memo-text>Volte em ${self.time} para continuar seu aprendizado.</memo-text>
        </memo-stack>
      </memo-stack>
    `;
}

export default component;
