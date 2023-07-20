import reflow from './reflow'
import render from './render'

/**
 * Represents a Text node in the DOM.
 */
class Text {
  #content
  #node

  /**
   * Get the content of the Text node.
   * @returns {string} The content of the Text node.
   */
  get content () {
    return this.#content
  }

  /**
   * Allowed types for conversion to Text node instance.
   * @private
   */
  static get #allowedTypes () {
    return ['Array', 'Boolean', 'Date', 'Number', 'String']
  }

  /**
   * Create a new Text node instance.
   * @param {string} content - The content of the Text node.
   */
  constructor (content) {
    this.#content = content
  }

  /**
   * Insert the Text node after a given child element.
   * @param {Node} child - The child element after which the Text node will be inserted.
   * @returns {Text} The Text node instance.
   */
  after (child) {
    const node = child[render.flow]()
    this.#node.after(node)
    return this
  }

  /**
   * Remove the Text node from the DOM.
   * @returns {Text} The Text node instance.
   */
  remove () {
    this.#node.remove()
    return this
  }

  /**
   * Internal method to check if the Text node content is different from another Text node.
   * @private
   * @param {Text} nText - The other Text node to compare with.
   * @returns {boolean} True if the content of the Text node is different.
   */
  [reflow.different] (nText) {
    return this.content !== nText.content
  }

  /**
   * Get the DOM Text node or create a new one with the current content.
   * @returns {Text} The DOM Text node.
   */
  [render.flow] () {
    this.#node ??= document.createTextNode(this.#content)
    return this.#node
  }

  /**
   * Internal static method to create a new Text node instance from a given content.
   * @private
   * @param {string} node - The content of the Text node.
   * @returns {Text} A new Text node instance.
   */
  static #create (node) {
    return new Text(node)
  }

  /**
   * Internal static method to check if a child is of an allowed type for Text node.
   * @private
   * @param {*} child - The child element to check.
   * @returns {boolean} True if the child is of an allowed type for Text node.
   */
  static #is (child) {
    const type = {}.toString.call(child).slice(8, -1)
    return Text.#allowedTypes.includes(type)
  }

  /**
   * Map an array of child elements and convert allowed types to Text node instances.
   * @param {Array} childList - The array of child elements to map.
   * @returns {Array} An array of child elements with allowed types converted to Text node instances.
   */
  static mapper (childList) {
    return childList
      .map((child) => (
        Text.#is(child) ? Text.#create(child) : child
      ))
  }
}

export default Text
