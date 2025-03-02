import { html } from "standard/dom";
import { params, urlFor } from "standard/router";
import imageEmpty from "./image-empty.svg";
import imageFull from "./image-full.svg";

function component(self) {
  if (self.pendingCards) {
    return html`
      <m-stack align="center">
        <img src="${imageFull}" alt="Memoize" loading="auto" />
        <m-stack direction="column" spacing="none">
          <m-text family="highlight" size="sm" color="master-darker" weight="bold">Você tem revisões!</m-text>
          <m-text>Há <strong>${self.pendingCards}</strong> revisões aguardando você.</m-text>
        </m-stack>
      </m-stack>
      <m-button id="goToStudy">
        Revisar agora
        <m-redirect href="${urlFor("cardOfDeck", params)}" on="goToStudy/click:method/go"></m-redirect>
      </m-button>
    `;
  }

  if (self.nextReviewIn) {
    return html`
      <m-stack align="center">
        <img src="${imageEmpty}" alt="Memoize" loading="auto" />
        <m-stack direction="column" spacing="none">
          <m-text family="highlight" size="sm" color="master-darker" weight="bold">Estudo concluído</m-text>
          <m-text>Volte em <strong>${self.nextReviewIn}</strong> para continuar seu aprendizado.</m-text>
        </m-stack>
      </m-stack>
    `;
  }

  return html``;
}

export default component;
