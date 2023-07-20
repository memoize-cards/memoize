import emit from './emit'
import on from './on'

/**
 * An object that represents an event bus, providing methods to emit and listen for events.
 *
 * @property {Emit} emit - The method to emit an event through the event bus.
 * @property {On} on - The method to register a listener for events on the event bus.
 */
export default {
  /**
   * The method to emit an event through the event bus.
   *
   * @type {Emit}
   */
  emit,

  /**
   * The method to register a listener for events on the event bus.
   *
   * @type {On}
   */
  on
}
