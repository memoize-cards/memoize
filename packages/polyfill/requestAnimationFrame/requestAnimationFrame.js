/**
 * Define um polyfill para `requestAnimationFrame` no objeto `window`, caso ele não exista.
 *
 * @method window.requestAnimationFrame
 * @param {Function} functionRef - A função de callback que será executada na próxima iteração do loop de eventos.
 * @returns {void}
 *
 * @description
 * Este código verifica se o método `requestAnimationFrame` não está disponível no ambiente atual (por exemplo, em navegadores mais antigos).
 * Se o método não existir, ele define um polyfill que utiliza `setTimeout` com um atraso de 0 milissegundos para imitar o comportamento de `requestAnimationFrame`.
 *
 * O `requestAnimationFrame` é utilizado para otimizar animações, garantindo que o navegador execute a função de callback na próxima atualização de tela, proporcionando melhor performance para animações gráficas.
 *
 * Caso o método nativo já esteja disponível, o código não altera o comportamento padrão.
 *
 * @example
 * // Usando o polyfill de requestAnimationFrame
 * window.requestAnimationFrame(() => {
 *   console.log('Frame atualizado.');
 * });
 */
!("requestAnimationFrame" in window) &&
  Reflect.defineProperty(window, "requestAnimationFrame", {
    value(functionRef) {
      setTimeout(functionRef, 0);
    },
  });
