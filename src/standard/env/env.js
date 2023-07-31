/**
 * Um objeto Proxy que permite acessar o ambiente de execução do Node.js.
 *
 * @type {EnvironmentProxy}
 */
const env = new Proxy({}, {
  /**
   * Retorna um valor booleano indicando se o ambiente corresponde à chave especificada.
   *
   * @param {Object} _target - O objeto proxy sendo acessado.
   * @param {string} key - A chave para verificar o ambiente.
   * @returns {boolean} true se o ambiente corresponder à chave, caso contrário, false.
   */
  get: (_target, key) => (process.env.NODE_ENV === key)
})

export default env
