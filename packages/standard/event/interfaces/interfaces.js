/**
 * Símbolo utilizado para controlar e abortar eventos associados a um Custom Element.
 *
 * Este símbolo é usado para associar um `AbortController` a um Custom Element, permitindo o gerenciamento e
 * a interrupção de eventos quando o elemento é removido do DOM. É útil para evitar vazamentos de memória e
 * garantir que os eventos não sejam processados após o elemento ser desconectado.
 *
 * @constant {Symbol} abortController - Símbolo usado para armazenar e acessar o AbortController associado.
 */
export const abortController = Symbol("abortController");
