import { html } from "standard/dom";

function component(self) {
  return html`
    <m-stack align="center" spacing="nano">
      <m-avatar src="${self.user.avatar}" alt="${self.user.name}" learn="${self.progress.learn}" relearn="${self.progress.relearn}" review="${self.progress.review}"></m-avatar>
      <m-stack direction="column" spacing="none">
        <m-text family="highlight" size="xs" weight="bold">${self.user.name}</m-text>
        <m-stack align="center" spacing="quarck">
          <m-icon use="timer" size="xs"></m-icon>
          <m-text size="xxxs" color="info">${self.user.reviewTime}</m-text></m-text>
        </m-stack>
      </m-stack>
      <tag>
        ${self.progress.mastered}
        <m-icon use="cognition" color="currentColor"></m-icon>
      </tag>
    </m-stack>
  `;
}

export default component;
