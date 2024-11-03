import { html } from "standard/dom";

function component() {
  return html`
    <footer>
      <container>
        <leading>
          <slot name="leading"></slot>
        </leading>
        <trailing>
          <slot name="trailing"></slot>
        </trailing>
      </container>
    </footer>
  `;
}

export default component;
