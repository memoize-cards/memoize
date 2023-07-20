/**
 * An example Blob instance that contains a self-contained worker script.
 *
 * @type {Blob}
 */
export default new Blob(
  ['self.addEventListener(\'message\', e => self.postMessage(e.data))'],
  { type: 'application/javascript' }
)
