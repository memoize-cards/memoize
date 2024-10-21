import intercept, { exec } from "standard/intercept";
import { formResetCallback } from "standard/lifeCycle";

/**
 * Cria um decorator para adicionar lógica ao método `formResetCallback` de um Custom Element.
 *
 * @param {Object} target - O alvo do decorator, geralmente a classe do Custom Element.
 * @param {string|Symbol} propertyKey - O nome do método decorado.
 * @returns {void}
 *
 * @description
 * O decorator `formReset` permite adicionar lógica personalizada ao método `formResetCallback` de um
 * Custom Element. Este método é chamado automaticamente quando o formulário ao qual o elemento pertence
 * é redefinido. O decorator possibilita a execução de uma função personalizada durante esse processo.
 *
 * @example
 * import { formReset } from 'directive';
 *
 * class MyElement extends HTMLElement {
 *   constructor() {
 *     super();
 *     this.attachShadow({ mode: 'open' });
 *   }
 *
 *   @formReset
 *   handleFormReset() {
 *     console.log('O formulário foi redefinido.');
 *   }
 * }
 *
 * customElements.define('my-element', MyElement);
 */
const formReset = (target, propertyKey) => {
  // Cria uma instância do interceptor para o método `formResetCallback`.
  const interceptor = intercept(formResetCallback);

  // Adiciona o método decorado à lista de callbacks a serem executados.
  return interceptor
    .in(target) // Define o alvo do interceptor.
    .then(exec(propertyKey)); // Define o método a ser executado pelo interceptor.
};

export default formReset;
