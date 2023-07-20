import Event from './event'
import magic from '@standard/magic'
import reflow from './reflow'
import render from './render'
import repaint from './repaint'

/**
 * Class representing a collection of events associated with a target element.
 *
 * @class
 * @param {Array<Event>} eventList - The list of Event instances.
 * @param {HTMLElement} target - The target element to which the events are associated.
 */
class Events {
  #target
  #eventList

  /**
   * Create a new Events instance.
   *
   * @constructor
   * @param {Array<Event>} eventList - The list of Event instances.
   * @param {HTMLElement} target - The target element to which the events are associated.
   */
  constructor (eventList, target) {
    this.#eventList = eventList
    this.#target = target
  }

  /**
   * Add a new event to the collection and attach it to the target element.
   *
   * @param {Event} nEvent - The new Event instance to add.
   * @returns {Events} The Events instance for method chaining.
   */
  [reflow.add] (nEvent) {
    this.#eventList.push(nEvent)
    this.#target.addEventListener(nEvent)
    return this
  }

  /**
   * Remove an event from the collection and detach it from the target element.
   *
   * @param {Event} event - The Event instance to remove.
   * @returns {Events} The Events instance for method chaining.
   */
  [reflow.remove] (event) {
    const start = this.#eventList.indexOf(event)
    this.#eventList.splice(start, 1)
    this.#target.removeEventListener(event)
    return this
  }

  /**
   * Replace an existing event with a new event in the collection and update the target element accordingly.
   *
   * @param {Event} event - The Event instance to replace.
   * @param {Event} nEvent - The new Event instance to add.
   * @returns {Events} The Events instance for method chaining.
   */
  [reflow.replace] (event, nEvent) {
    const start = this.#eventList.indexOf(event)
    this.#eventList.splice(start, 1, nEvent)
    this.#target.removeEventListener(event)
    this.#target.addEventListener(nEvent)
    return this
  }

  /**
   * Attach all events in the collection to the target element.
   *
   * @returns {Events} The Events instance for method chaining.
   */
  [render.flow] () {
    this.#eventList.forEach((event) => this.#target.addEventListener(event))
    return this
  }

  /**
   * Handle reflowing events from the new Events instance to the current instance.
   *
   * @param {Events} nEvent - The new Events instance to compare.
   * @returns {Events} The Events instance for method chaining.
   */
  [repaint.reflow] (nEvent) {
    reflow(this, nEvent)
    return this
  }

  /**
   * Get the array representation of the Events instance.
   *
   * @returns {Array<Event>} The array of Event instances.
   */
  [magic.zip] () {
    return this.#eventList
  }

  /**
   * Iterator method for the Events class.
   *
   * @generator
   * @yields {Event} The Event instance.
   */
  * [Symbol.iterator] () {
    yield * this.#eventList
  }

  /**
   * Create an Events instance based on the attribute list and the target element.
   *
   * @static
   * @param {Array} attrList - The list of attributes to be mapped to Event instances.
   * @param {HTMLElement} target - The target element to which the events are associated.
   * @returns {Events} A new Events instance.
   */
  static create (attrList, target) {
    attrList = Event.mapper(attrList)
    return new Events(attrList, target)
  }
}

export default Events
