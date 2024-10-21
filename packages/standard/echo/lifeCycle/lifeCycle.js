/**
 * Callbacks específicos do Echo.
 *
 * Esses são os callbacks utilizados pelo módulo Echo para gerenciar a conexão e desconexão de eventos.
 *
 * @constant {symbol} echoConnectedCallback - Callback chamado pelo Echo ao conectar um protocolo de eventos.
 * @constant {symbol} echoDisconnectedCallback - Callback chamado pelo Echo ao desconectar um protocolo de eventos.
 */
export const echoConnectedCallback = Symbol.for("echoConnectedCallback");
export const echoDisconnectedCallback = Symbol.for("echoDisconnectedCallback");
