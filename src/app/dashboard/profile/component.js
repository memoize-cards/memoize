import { html } from "standard/dom";

function component(self) {
  return html`
    <memo-stack direction="column" align="center">
      <memo-avatar src="${self.user.avatar}" alt="${self.user.name}" learn="${self.progress.learn}" relearn="${self.progress.relearn}" review="${self.progress.review}"></memo-avatar>
      <memo-stack direction="column" spacing="quarck" align="center">
        <memo-text family="highlight" size="sm" weight="bold">${self.user.name}</memo-text>
        <memo-text size="xxs"><memo-text size="xxs" weight="medium" color="success-dark">${self.progress.mastered}</memo-text> / ${self.progress.total}</memo-text>
      </memo-stack>
    </memo-stack>
  `;
}

export default component;
