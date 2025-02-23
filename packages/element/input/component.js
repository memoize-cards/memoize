import { html } from "standard/dom";

function component(self) {
  return html`
    <label for="${self.name}">
      ${self.label}
    </label>
    <input
      autocomplete="${self.autocomplete}"
      id="${self.name}"
      inputmode="${self.inputMode}"
      name="${self.name}"
      placeholder="${self.placeholder}"
      type="${self.type}"
      value="${self.value}"
      ${self.maxlength ? `maxlength="${self.maxlength}"` : ""}
      ${self.required ? "required" : ""}
    />
    <slot></slot>
  `;
}

export default component;
