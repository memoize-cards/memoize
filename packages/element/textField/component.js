import { html } from "standard/dom";

function component(self) {
  return html`
    <label for="${self.name}">
      ${self.label}
    </label>
    <input
      id="${self.name}"
      inputmode="${self.inputMode}"
      placeholder="${self.placeholder}"
      name="${self.name}"
      type="${self.type}"
      value="${self.value}"
      ${self.required ? "required" : ""}
    />
    <slot></slot>
  `;
}

export default component;
