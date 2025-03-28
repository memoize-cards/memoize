import { html } from "standard/dom";

function component(self) {
  return html`
    <m-stack justify="space-between">
      ${self.habit.map(
        (day) => html`
          <day ${day.today ? "is-today" : ""}>
            <m-text size="xxxs" color="info">${day.label}</m-text>
            <m-text family="highlight" size="sm" color="master-darker" weight="bold">${day.number}</m-text>
            <m-show when="${day.goalAchieved}" justify="center">
              <m-icon use="check" size="xxs"></m-icon>
            <m/-show>
          </day>
        `,
      )}
    </m-stack>
  `;
}

export default component;
