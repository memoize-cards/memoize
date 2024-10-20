/**
 * Impede o comportamento padrão de um evento.
 *
 * @param {Event} event - O evento a ser filtrado.
 * @returns {Event} O próprio evento, após impedir o comportamento padrão.
 *
 * @description
 * Este filtro chama o método `preventDefault` do evento, evitando que a ação padrão associada ao evento
 * seja executada. Após impedir o comportamento padrão, o próprio evento é retornado, permitindo
 * que outras operações sejam realizadas com o evento modificado.
 *
 * @example
 * import { prevent } from 'standard/event';
 *
 * function handleClick(event) {
 *   prevent(event);
 *   return event
 * }
 */
function prevent(event) {
  event.preventDefault();
  return event;
}

export default prevent;
