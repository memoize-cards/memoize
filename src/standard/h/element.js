import Attributes from './attributes'
import Children from './children'
import ClassName from './className'
import didMount from './didMount'
import didUpdate from './didUpdate'
import didUnmount from './didUnmount'
import Events from './events'
import Is from './is'
import Key from './key'
import paint from './paint'
import reflow from './reflow'
import render from './render'
import repaint from './repaint'
import revoke from '@standard/revoke'
import Slot from './slot'
import willMount from './willMount'
import willUpdate from './willUpdate'
import willUnmount from './willUnmount'

/**
 * Class representing a DOM element with reactive behavior.
 *
 * @class
 * @decorator revoke
 * @param {string} nodeName - The name of the DOM node to be created.
 * @param {Object} attrs - The attributes to be set on the element.
 * @param {Array} children - The children elements to be appended to the element.
 * @property {Attributes} attributes - The attributes object.
 * @property {Children} children - The children object.
 * @property {ClassName} className - The class name object.
 * @property {Events} events - The events object.
 * @property {string} is - The custom element name.
 * @property {string} key - The key attribute value.
 * @property {string} nodeName - The name of the DOM node.
 * @property {string} slot - The slot attribute value.
 * @property {HTMLElement} __node__ - The actual DOM node.
 */
@revoke
class Element {
  #attributes
  #children
  #className
  #events
  #is
  #key
  #node
  #nodeName
  #slot

  /**
   * Get the attributes object.
   *
   * @type {Attributes}
   */
  get attributes () {
    return this.#attributes
  }

  /**
   * Get the children object.
   *
   * @type {Children}
   */
  get children () {
    return this.#children
  }

  /**
   * Get the class name object.
   *
   * @type {ClassName}
   */
  get className () {
    return this.#className
  }

  /**
   * Get the events object.
   *
   * @type {Events}
   */
  get events () {
    return this.#events
  }

  /**
   * Get the custom element name.
   *
   * @type {string}
   */
  get is () {
    return this.#is.value
  }

  /**
   * Get the key attribute value.
   *
   * @type {string}
   */
  get key () {
    return this.#key.value
  }

  /**
   * Get the name of the DOM node.
   *
   * @type {string}
   */
  get nodeName () {
    return this.#nodeName
  }

  /**
   * Get the slot attribute value.
   *
   * @type {string}
   */
  get slot () {
    return this.#slot.value
  }

  /**
   * Get the actual DOM node.
   *
   * @type {HTMLElement}
   * @private
   */
  get __node__ () {
    return this.#node
  }

  /**
   * Create a new Element instance.
   *
   * @constructor
   * @param {string} nodeName - The name of the DOM node to be created.
   * @param {Object} attrs - The attributes to be set on the element.
   * @param {Array} children - The children elements to be appended to the element.
   */
  constructor (nodeName, attrs, children) {
    this.#nodeName = nodeName
    this.#attributes = Attributes.create(attrs, this)
    this.#children = Children.create(children, this)
    this.#className = ClassName.create(attrs, this)
    this.#events = Events.create(attrs, this)
    this.#is = Is.create(attrs)
    this.#key = Key.create(attrs)
    this.#slot = Slot.create(attrs)
  }

  /**
   * Add an event listener to the element.
   *
   * @param {Array} event - An array containing the event name and the event handler function.
   * @returns {Element} The current Element instance.
   */
  addEventListener (event) {
    Reflect.set(this.#node, ...event)
    return this
  }

  /**
   * Append a child element after a specified child element.
   *
   * @param {Element} child - The child element to insert after.
   * @returns {Element} The current Element instance.
   */
  after (child) {
    const node = child[render.flow]()
    this.#node.after(node)
    return this
  }

  /**
   * Append an array of child elements to the element.
   *
   * @param {Array} childList - An array containing the child elements to be appended.
   * @returns {Element} The current Element instance.
   */
  append (childList) {
    const nodeList = childList.map((child) => child[render.flow]())
    this.#node.append(...nodeList)
    return this
  }

  /**
   * Append a child element to the element.
   *
   * @param {Element} child - The child element to be appended.
   * @returns {Element} The current Element instance.
   */
  appendChild (child) {
    const node = child[render.flow]()
    this.#node.appendChild(node)
    return this
  }

  /**
   * Remove the element from the DOM.
   *
   * @returns {Element} The current Element instance.
   */
  @didUnmount
  @willUnmount
  remove () {
    this.#node.remove()
    return this
  }

  /**
   * Remove an attribute from the element.
   *
   * @param {Object} attr - The attribute object to be removed.
   * @returns {Element} The current Element instance.
   */
  removeAttribute (attr) {
    this.#node.removeAttribute(attr?.key)
    return this
  }

  /**
   * Remove an event listener from the element.
   *
   * @param {Object} event - The event object to be removed.
   * @returns {Element} The current Element instance.
   */
  removeEventListener (event) {
    delete this.#node[event.name]
    return this
  }

  /**
   * Replace a child element with another element.
   *
   * @param {Element} child - The child element to be replaced.
   * @param {Element} nChild - The new child element to replace the old one.
   * @returns {Element} The current Element instance.
   */
  replace (child, nChild) {
    child.after(nChild)
    child.remove()
    return this
  }

  /**
   * Set an attribute on the element.
   *
   * @param {Object} attr - The attribute object to be set.
   * @returns {Element} The current Element instance.
   */
  setAttribute (attr) {
    this.#node.setAttribute(...attr)
    return this
  }

  /**
   * Check if the current Element is different from the new Element during a reflow.
   *
   * @param {Element} nElement - The new Element to compare.
   * @returns {boolean} Whether the Elements are different or not.
   */
  [reflow.different] (nElement) {
    return (
      (this.nodeName !== nElement.nodeName) ||
      (this.is !== nElement.is)
    )
  }

  /**
   * Check if the current Element is the same as the new Element during a reflow.
   *
   * @param {Element} nElement - The new Element to compare.
   * @returns {boolean} Whether the Elements are the same or not.
   */
  [reflow.same] (nElement) {
    return (
      (this.key !== undefined && this.key === nElement.key) ||
      (this[paint.instance]?.() && this[paint.instance]?.() === nElement[paint.instance]?.())
    )
  }

  /**
   * Create the actual DOM node and flow the attributes, class name, events, and children.
   *
   * @returns {HTMLElement} The actual DOM node.
   */
  @didMount
  @willMount
  [render.flow] () {
    this.#node ??= document.createElement(this.nodeName, { is: this.is })
    this.events[render.flow]()
    this.attributes[render.flow]()
    this.className[render.flow]()
    this.children[render.flow]()
    return this.#node
  }

  /**
   * Repaint the element during an update.
   *
   * @param {Element} nElement - The new Element to repaint with.
   * @returns {Element} The current Element instance.
   */
  @didUpdate
  @willUpdate
  [repaint.reflow] (nElement) {
    this.events[repaint.reflow](nElement.events)
    this.attributes[repaint.reflow](nElement.attributes)
    this.className[repaint.reflow](nElement.className)
    this.children[repaint.reflow](nElement.children)
    return this
  }

  /**
   * Create a new Element instance.
   *
   * @static
   * @param {string} nodeName - The name of the DOM node to be created.
   * @param {Object} attrs - The attributes to be set on the element.
   * @param {Array} children - The children elements to be appended to the element.
   * @returns {Element} A new Element instance.
   */
  static create (nodeName, attrs, children) {
    attrs = Object.entries(attrs)
    children = children.flat(Infinity)
    return new Element(nodeName, attrs, children)
  }

  /**
   * Check if the given nodeName represents an actual DOM element (string type).
   *
   * @static
   * @param {*} nodeName - The name of the DOM node to check.
   * @returns {boolean} Whether the nodeName represents a DOM element or not.
   */
  static is (nodeName) {
    return typeof nodeName === 'string'
  }
}

export default Element
