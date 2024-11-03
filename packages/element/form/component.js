import { html } from "standard/dom";

function component(self) {
  return html`
    <form>
      ${self.content}
    </form>
  `;
}

export default component;
