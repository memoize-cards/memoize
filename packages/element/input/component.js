import { html } from "standard/dom";

function component(self) {
  return html`
    <label for="${self.name}">
      ${self.label}
    </label>
    <slot name="preview"></slot>
    <input
      autocomplete="${self.autocomplete}"
      id="${self.name}"
      inputmode="${self.inputMode}"
      name="${self.name}"
      placeholder="${self.placeholder}"
      type="${self.type}"
      value="${self.value}"
      ${self.max ? `max="${self.max}"` : ""}
      ${self.min ? `min="${self.min}"` : ""}
      ${self.required ? "required" : ""}
    />
    <slot name="hint"></slot>
    <slot></slot>
  `;
}

export default component;
