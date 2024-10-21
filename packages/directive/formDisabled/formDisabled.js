import intercept, { exec } from "standard/intercept";
import { formDisabledCallback } from "standard/lifeCycle";

/**
 * Cria um decorator para adicionar lógica ao método `formDisabledCallback` de um Custom Element.
 *
 * @param {Object} target - O alvo do decorator, geralmente a classe do Custom Element.
 * @param {string|Symbol} propertyKey - O nome do método decorado.
 * @returns {void}
 *
 * @description
 * O decorator `formDisabled` permite adicionar lógica personalizada ao método `formDisabledCallback` de um
 * Custom Element. Este método é chamado automaticamente quando o elemento é desativado dentro de um formulário.
 * O decorator permite que você execute uma função personalizada durante esse processo.
 *
 * @example
 * import { formDisabled } from 'directive';
 *
 * class MyElement extends HTMLElement {
 *   constructor() {
 *     super();
 *     this.attachShadow({ mode: 'open' });
 *   }
 *
 *   @formDisabled
 *   handleFormDisabled() {
 *     console.log('O elemento foi desativado no formulário.');
 *   }
 * }
 *
 * customElements.define('my-element', MyElement);
 */
const formDisabled = (target, propertyKey) => {
  // Cria uma instância do interceptor para o método `formDisabledCallback`.
  const interceptor = intercept(formDisabledCallback);

  // Adiciona o método decorado à lista de callbacks a serem executados.
  return interceptor
    .in(target) // Define o alvo do interceptor.
    .then(exec(propertyKey)); // Define o método a ser executado pelo interceptor.
};

export default formDisabled;
