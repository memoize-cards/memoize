import worker from './worker'

/**
 * Registers a listener for messages received on a specific channel from the worker.
 *
 * @param {string} channel - The channel to listen for messages on.
 * @param {function} functionRef - The function reference to be called when a message is received on the specified channel.
 */
function on (channel, funcitonRef) {
  worker.addEventListener('message', (event) => (
    (channel === event.data?.channel) && funcitonRef(event.data?.message))
  )
}

export default on
