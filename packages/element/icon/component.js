import { html } from "standard/dom";
import medias from "./medias";

async function component(self) {
  return (await medias[self.use]()).default;
}

export default component;
