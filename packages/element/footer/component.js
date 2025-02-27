import { html } from "standard/dom";

function component() {
  return html`
    <footer>
      <container>
        <leading>
          <slot name="leading">
            <memo-text slot="leading">© 2024 Memoize. Todos os direitos reservados.</memo-text>
          </slot>
        </leading>
        <trailing>
          <slot name="trailing"></slot>
        </trailing>
      </container>
    </footer>
  `;
}

export default component;
