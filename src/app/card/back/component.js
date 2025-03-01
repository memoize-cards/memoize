import { html } from "standard/dom";

async function component() {
  return html`
    <m-box>
      <slot></slot>
      <m-button id="speech" variant="icon">
        <m-icon use="textToSpeech"></m-icon>
      </m-button>
    </m-box>
  `;
}

export default component;
