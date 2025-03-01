import { html } from "standard/dom";

async function component(self) {
  return html`
    <m-stack direction="column">
      <m-text size="xs" family="highlight" color="master-darker" weight="medium">Você conseguiu se lembrar?</m-text>
      <m-answer>
        <m-button id="easy" color="complete">Sim</m-button>
        <m-button id="good" color="success">Com esforço</m-button>
        <m-button id="hard" color="warning">Parcialmente</m-button>
        <m-button id="again" color="danger">Não</m-button>
      </m-answer>
      <m-info>Isso ajuda a medir sua compreensão e memória do assunto.</m-info>
    </m-stack>
  </m-stack>
  `;
}

export default component;
