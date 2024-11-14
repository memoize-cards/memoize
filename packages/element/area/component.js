import { html } from "standard/dom";

function component(self) {
  return html`
    <label for="${self.name}">
      ${self.label}
    </label>
    <textarea
      autocomplete="${self.autocomplete}"
      id="${self.name}"
      name="${self.name}"
      placeholder="${self.placeholder}"
      ${self.required ? "required" : ""}
    >${self.value}</textarea>
    <slot></slot>
  `;
}

export default component;
