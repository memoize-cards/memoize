import { html } from "standard/dom";

function component(self) {
  return html`
    <m-stack direction="column" align="center">
      <m-avatar src="${self.user.avatar}" alt="${self.user.name}" learn="${self.progress.learn}" relearn="${self.progress.relearn}" review="${self.progress.review}"></m-avatar>
      <m-stack direction="column" spacing="none" align="center">
        <m-text family="highlight" size="md" weight="bold">${self.user.name}</m-text>
        <m-text size="xxs"><m-text size="xxs" weight="medium" color="success-dark">${self.progress.mastered}</m-text> / ${self.progress.total}</m-text>
      </m-stack>
    </m-stack>
  `;
}

export default component;
