/**
 * Define um polyfill para `setImmediate` no objeto `window`.
 *
 * @method window.setImmediate
 * @param {Function} functionRef - A função de callback que será executada imediatamente após a execução do código atual.
 * @returns {number} O ID do temporizador retornado por `setTimeout`, que pode ser utilizado para cancelar a execução com `clearTimeout`.
 *
 * @description
 * Este código cria uma implementação de `setImmediate` utilizando `setTimeout` com um atraso de 0 milissegundos, para simular a execução imediata de uma função de callback.
 * Embora `setImmediate` seja nativamente suportado em alguns ambientes (como o Internet Explorer e o Node.js), muitos navegadores não o suportam.
 *
 * Este polyfill usa `setTimeout` como alternativa, permitindo que a função seja executada o mais rápido possível, mas ainda assim após o término do código em execução no momento.
 *
 * @example
 * // Usando o polyfill de setImmediate
 * window.setImmediate(() => {
 *   console.log('Executado imediatamente após o código atual.');
 * });
 */
Reflect.defineProperty(window, "setImmediate", {
  value(functionRef) {
    return setTimeout(functionRef, 0);
  },
});
