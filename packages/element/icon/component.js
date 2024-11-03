import { html } from "standard/dom";
import medias from "./medias";

async function component(self) {
  return html`
    <img alt="Language" src="${(await medias[self.use]()).default}" loading="lazy" />
  `;
}

export default component;
