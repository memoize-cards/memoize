import Attribute from './attribute'
import magic from '@standard/magic'
import reflow from './reflow'
import render from './render'
import repaint from './repaint'

/**
 * Represents a collection of attributes for a target element.
 */
class Attributes {
  /**
   * The list of attributes.
   *
   * @type {Array<Attribute>}
   */
  #attrList

  /**
   * The target element.
   *
   * @type {Element}
   */
  #target

  /**
   * Create a new Attributes instance.
   *
   * @param {Array<Attribute>} attrList - The list of attributes.
   * @param {Element} target - The target element.
   */
  constructor (attrList, target) {
    this.#attrList = attrList
    this.#target = target
  }

  /**
   * Add a new attribute to the collection.
   *
   * @param {Attribute} nAttr - The new attribute to add.
   * @returns {Attributes} The updated Attributes instance.
   */
  [reflow.add] (nAttr) {
    this.#attrList.push(nAttr)
    this.#target.setAttribute(nAttr)
    return this
  }

  /**
   * Remove an attribute from the collection.
   *
   * @param {Attribute} attr - The attribute to remove.
   * @returns {Attributes} The updated Attributes instance.
   */
  [reflow.remove] (attr) {
    const start = this.#attrList.indexOf(attr)
    this.#attrList.splice(start, 1)
    this.#target.removeAttribute(attr)
    return this
  }

  /**
   * Replace an attribute in the collection with a new attribute.
   *
   * @param {Attribute} attr - The attribute to replace.
   * @param {Attribute} nAttr - The new attribute.
   * @returns {Attributes} The updated Attributes instance.
   */
  [reflow.replace] (attr, nAttr) {
    const start = this.#attrList.indexOf(attr)
    this.#attrList.splice(start, 1, nAttr)
    this.#target.removeAttribute(attr)
    this.#target.setAttribute(nAttr)
    return this
  }

  /**
   * Render the attributes to the target element.
   *
   * @returns {Attributes} The updated Attributes instance.
   */
  [render.flow] () {
    this.#attrList.forEach((attr) => this.#target.setAttribute(attr))
    return this
  }

  /**
   * Perform reflow with new attributes.
   *
   * @param {Attributes} nAttributes - The new attributes.
   * @returns {Attributes} The updated Attributes instance.
   */
  [repaint.reflow] (nAttributes) {
    reflow(this, nAttributes)
    return this
  }

  /**
   * Get the zipped list of attributes.
   *
   * @returns {Array<Attribute>} The zipped list of attributes.
   */
  [magic.zip] () {
    return this.#attrList
  }

  /**
   * Get an iterator for the attributes.
   *
   * @generator
   * @yields {Attribute} The attribute.
   */
  * [Symbol.iterator] () {
    yield * this.#attrList
  }

  /**
   * Create an Attributes instance.
   *
   * @static
   * @param {Array} attrList - The list of attributes.
   * @param {Element} target - The target element.
   * @returns {Attributes} The created Attributes instance.
   */
  static create (attrList, target) {
    attrList = Attribute.mapper(attrList)
    return new Attributes(attrList, target)
  }
}

export default Attributes
