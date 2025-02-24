import { html } from "standard/dom";
import { urlFor } from "standard/router";
import imageEmpty from "./image-empty.svg";
import imageFull from "./image-full.svg";

function component(self) {
  console.log(self.total, self.time);
  if (self.total) {
    return html`
      <memo-stack align="center">
        <img src="${imageFull}" alt="Memoize" loading="auto" />
        <memo-stack direction="column" spacing="none">
          <memo-text family="highlight" size="sm" color="master-darker" weight="bold">Você tem revisões!</memo-text>
          <memo-text>Há <strong>${self.total}</strong> revisões aguardando você.</memo-text>
        </memo-stack>
      </memo-stack>
      <memo-button id="goToDeck">
        Revisar agora
        <memo-redirect href="${urlFor("card")}" on="goToDeck/click:method/go"></memo-redirect>
      </memo-button>
    `;
  }

  if (self.time) {
    return html`
      <img src="${imageEmpty}" alt="Memoize" loading="auto" />
      <memo-stack direction="column" spacing="none">
        <memo-text family="highlight" size="sm" color="master-darker" weight="bold">Estudo concluído</memo-text>
        <memo-text>Volte em <strong>${self.time}</strong> para continuar seu aprendizado.</memo-text>
      </memo-stack>
    `;
  }

  return html``;
}

export default component;
