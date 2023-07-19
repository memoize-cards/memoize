import Instance from './instance'
import magic from '@standard/magic'
import reflow from './reflow'
import render from './render'
import repaint from './repaint'
import Text from './text'

/**
 * Represents a collection of children for a parent element.
 */
class Children {
  /**
   * The list of children.
   *
   * @type {Array<Child>}
   */
  #childList

  /**
   * The parent element.
   *
   * @type {Element}
   */
  #parent

  /**
   * Create a new Children instance.
   *
   * @param {Array<Child>} childList - The list of children.
   * @param {Element} parent - The parent element.
   */
  constructor (childList, parent) {
    this.#childList = childList
    this.#parent = parent
  }

  /**
   * Add a new child to the collection.
   *
   * @param {Child} nChild - The new child to add.
   * @returns {Children} The updated Children instance.
   */
  [reflow.add] (nChild) {
    this.#parent.appendChild(nChild)
    this.#childList.push(nChild)
    return this
  }

  /**
   * Remove a child from the collection.
   *
   * @param {Child} child - The child to remove.
   * @returns {Children} The updated Children instance.
   */
  [reflow.remove] (child) {
    const start = this.#childList.indexOf(child)
    this.#childList.splice(start, 1)
    child.remove()
    return this
  }

  /**
   * Replace a child in the collection with a new child.
   *
   * @param {Child} child - The child to replace.
   * @param {Child} nChild - The new child.
   * @returns {Children} The updated Children instance.
   */
  [reflow.replace] (child, nChild) {
    const start = this.#childList.indexOf(child)
    this.#childList.splice(start, 1, nChild)
    this.#parent.replace(child, nChild)
    return this
  }

  /**
   * Render the children to the parent element.
   *
   * @returns {Children} The updated Children instance.
   */
  [render.flow] () {
    this.#parent.append(this.#childList)
    return this
  }

  /**
   * Perform reflow with new children.
   *
   * @param {Children} nChildren - The new children.
   * @returns {Children} The updated Children instance.
   */
  [repaint.reflow] (nChildren) {
    reflow(this, nChildren)
    return this
  }

  /**
   * Get the zipped list of children.
   *
   * @returns {Array<Child>} The zipped list of children.
   */
  [magic.zip] () {
    return this.#childList
  }

  /**
   * Get an iterator for the children.
   *
   * @generator
   * @yields {Child} The child.
   */
  * [Symbol.iterator] () {
    yield * this.#childList
  }

  /**
   * Create a Children instance.
   *
   * @static
   * @param {Array} childList - The list of children.
   * @param {Element} parent - The parent element.
   * @returns {Children} The created Children instance.
   */
  static create (childList, parent) {
    childList = childList.filter(Boolean)
    childList = Text.mapper(childList)
    childList = Instance.mapper(childList)
    return new Children(childList, parent)
  }
}

export default Children
