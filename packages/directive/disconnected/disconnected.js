import intercept, { exec } from "standard/intercept";
import { disconnectedCallback } from "standard/lifeCycle";

/**
 * Decorator que adiciona lógica ao método `disconnectedCallback` de um Custom Element.
 *
 * @param {Object} target - O alvo do decorator, geralmente a classe do Custom Element.
 * @param {string|Symbol} propertyKey - O nome do método decorado.
 * @returns {void}
 *
 * @description
 * O decorator `disconnected` adiciona lógica ao método `disconnectedCallback` de um Custom Element. Ele permite
 * que você execute uma função personalizada quando o elemento é removido do DOM. A função decorada será chamada
 * automaticamente quando o `disconnectedCallback` for invocado.
 *
 * @example
 * import { disconnected } from 'directive';
 *
 * class MyElement extends HTMLElement {
 *   constructor() {
 *     super();
 *     this.attachShadow({ mode: 'open' });
 *   }
 *
 *   @disconnected
 *   handleDisconnect() {
 *     console.log('Elemento foi removido do DOM.');
 *   }
 * }
 *
 * customElements.define('my-element', MyElement);
 */
const disconnected = (target, propertyKey) => {
  // Cria uma instância do interceptor para o método `disconnectedCallback`.
  const interceptor = intercept(disconnectedCallback);

  // Adiciona o método decorado à lista de callbacks a serem executados.
  return interceptor
    .in(target) // Define o alvo do interceptor.
    .then(exec(propertyKey)); // Define o método a ser executado pelo interceptor.
};

export default disconnected;
