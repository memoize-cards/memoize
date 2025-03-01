import { html } from "standard/dom";

async function component(self) {
  return html`
    <m-stack direction="column" spacing="quarck" align="start">
      <m-text size="xxxs">${self.deck}</m-text>
      <m-text size="sm" family="highlight" color="master-darker">
        <slot></slot>
      </m-text>
      <m-tag color="${self.type.color}">${self.type.value}</m-tag>
    </m-stack>
  `;
}

export default component;
