import { html } from "standard/dom";

function component(self) {
  return html`
    <m-stack justify="space-between">
      ${self.days.map(
        (day) => html`
          <day ${day.isToday ? "is-today" : ""}>
            <m-text size="xxxs" color="info">${day.label}</m-text>
            <m-text family="highlight" size="sm" color="master-darker" weight="bold">${day.date}</m-text>
          </day>
        `,
      )}
    </m-stack>
  `;
}

export default component;
