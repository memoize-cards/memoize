import worker from './worker'

/**
 * A function that sends a message to a worker through a specified channel.
 *
 * @param {string} channel - The channel through which the message is sent.
 * @param {any} message - The message to be sent to the worker.
 * @returns {void}
 */
function emit (channel, message) {
  worker.postMessage({ channel, message })
}

export default emit
