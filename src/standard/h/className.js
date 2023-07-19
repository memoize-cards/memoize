import render from './render'
import repaint from './repaint'

/**
 * Represents the class attribute for an element.
 */
class ClassName {
  /**
   * The target element.
   *
   * @type {Element}
   */
  #target

  /**
   * The class value.
   *
   * @type {string}
   */
  #value

  /**
   * Get the attribute key.
   *
   * @returns {string} The attribute key.
   */
  get key () {
    return 'class'
  }

  /**
   * Get the trimmed class value.
   *
   * @returns {string} The trimmed class value.
   */
  get value () {
    return this.#value.trim()
  }

  /**
   * Create a new ClassName instance.
   *
   * @param {string} className - The class name.
   * @param {Element} target - The target element.
   */
  constructor (className, target) {
    this.#value = className
    this.#target = target
  }

  /**
   * Render the class attribute to the target element.
   *
   * @returns {ClassName} The updated ClassName instance.
   */
  [render.flow] () {
    this.value && this.#target.setAttribute(this)
    return this
  }

  /**
   * Perform reflow with a new ClassName.
   *
   * @param {ClassName} nClassName - The new ClassName.
   * @returns {ClassName} The updated ClassName instance.
   */
  [repaint.reflow] (nClassName) {
    if (this.value !== nClassName.value) {
      this.#value = nClassName.value
      if (this.value) {
        this.#target.setAttribute(this)
      } else {
        this.#target.removeAttribute()
      }
    }
    return this
  }

  /**
   * Get an iterator for the ClassName.
   *
   * @generator
   * @yields {string} The attribute key.
   * @yields {string} The attribute value.
   */
  * [Symbol.iterator] () {
    yield this.key
    yield this.value
  }

  /**
   * Create a ClassName instance.
   *
   * @static
   * @param {Array} attrList - The list of attributes.
   * @param {Element} target - The target element.
   * @returns {ClassName} The created ClassName instance.
   */
  static create (attrList, target) {
    const [, value] = attrList.find(ClassName.#is) ?? []
    const className = [].concat(value).flat(Infinity).join(' ')
    return new ClassName(className, target)
  }

  /**
   * Check if the attribute is a class attribute.
   *
   * @private
   * @param {Array} attr - The attribute.
   * @returns {boolean} `true` if the attribute is a class attribute, otherwise `false`.
   */
  static #is ([key, value]) {
    return /^(?<attr>className)$/.test(key) && value !== undefined
  }
}

export default ClassName
