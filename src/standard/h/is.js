/**
 * Represents the 'is' attribute value of an element, used to specify a custom element tag name.
 */
class Is {
  #value

  /**
   * Get the value of the 'is' attribute.
   *
   * @returns {string} The value of the 'is' attribute.
   */
  get value () {
    return this.#value
  }

  /**
   * Creates a new instance of the 'Is' class.
   *
   * @param {string} value - The value of the 'is' attribute.
   */
  constructor (value) {
    this.#value = value
  }

  /**
   * Creates a new 'Is' instance based on the provided attribute list.
   *
   * @static
   * @param {Array<Array>} attrList - The attribute list to search for the 'is' attribute.
   * @returns {Is} A new 'Is' instance with the 'is' attribute value, or an empty instance if not found.
   */
  static create (attrList) {
    const [, value] = attrList.find?.(Is.#is) ?? []
    return new Is(value)
  }

  /**
   * Private static method to check if an attribute entry represents the 'is' attribute.
   *
   * @private
   * @static
   * @param {Array} entry - The attribute entry to check.
   * @returns {boolean} A boolean indicating if the attribute is the 'is' attribute.
   */
  static #is ([key, value]) {
    return /^(?<attr>is)$/.test(key) && value !== undefined
  }
}

export default Is
