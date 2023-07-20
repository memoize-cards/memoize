import reflow from './reflow'

/**
 * Class representing an event associated with a listener.
 *
 * @class
 * @param {string} name - The name of the event.
 * @param {Function} listener - The event listener function.
 * @property {Function} listener - The event listener function.
 * @property {string} name - The name of the event in lowercase.
 */
class Event {
  #listener
  #name

  /**
   * Get the event listener function.
   *
   * @type {Function}
   */
  get listener () {
    return this.#listener
  }

  /**
   * Get the name of the event in lowercase.
   *
   * @type {string}
   */
  get name () {
    return this.#name.toLowerCase()
  }

  /**
   * Create a new Event instance.
   *
   * @constructor
   * @param {string} name - The name of the event.
   * @param {Function} listener - The event listener function.
   */
  constructor (name, listener) {
    this.#name = name
    this.#listener = listener
  }

  /**
   * Check if the current Event is different from the new Event during a reflow.
   *
   * @param {Event} nEvent - The new Event to compare.
   * @returns {boolean} Whether the Events are different or not.
   */
  [reflow.different] (nEvent) {
    return (
      this.name !== nEvent.name ||
      this.listener !== nEvent.listener
    )
  }

  /**
   * Iterator method for the Event class.
   *
   * @generator
   * @yields {string} The name of the event.
   * @yields {Function} The event listener function.
   */
  * [Symbol.iterator] () {
    yield this.name
    yield this.listener
  }

  /**
   * Create an Event instance based on the attribute list.
   *
   * @private
   * @static
   * @param {Array} attr - The attribute list containing the event name and listener.
   * @returns {Event} A new Event instance.
   */
  static #create (attr) {
    return new Event(...attr)
  }

  /**
   * Check if the attribute key represents an event (starts with "on" followed by an uppercase letter)
   * and the value is a function.
   *
   * @private
   * @static
   * @param {Array} attr - The attribute key-value pair to check.
   * @returns {boolean} Whether the key represents an event and the value is a function or not.
   */
  static #is ([key, value]) {
    return /^(?<attr>on[A-Z].+)$/.test(key) && typeof value === 'function'
  }

  /**
   * Map the attribute list to Event instances.
   *
   * @static
   * @param {Array} attrList - The list of attributes to be mapped to Event instances.
   * @returns {Array<Event>} An array of Event instances.
   */
  static mapper (attrList) {
    return attrList
      .filter(Event.#is)
      .map(Event.#create)
  }
}

export default Event
