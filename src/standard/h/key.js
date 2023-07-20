/**
 * Represents the 'key' attribute value of an element, used for efficient list rendering in virtual DOM updates.
 */
class Key {
  #value

  /**
   * Get the value of the 'key' attribute.
   *
   * @returns {any} The value of the 'key' attribute.
   */
  get value () {
    return this.#value
  }

  /**
   * Creates a new instance of the 'Key' class.
   *
   * @param {any} value - The value of the 'key' attribute.
   */
  constructor (value) {
    this.#value = value
  }

  /**
   * Creates a new 'Key' instance based on the provided attribute list.
   *
   * @static
   * @param {Array<Array>} attrList - The attribute list to search for the 'key' attribute.
   * @returns {Key} A new 'Key' instance with the 'key' attribute value, or an empty instance if not found.
   */
  static create (attrList) {
    const [, value] = attrList.find?.(Key.#is) ?? []
    return new Key(value)
  }

  /**
   * Private static method to check if an attribute entry represents the 'key' attribute.
   *
   * @private
   * @static
   * @param {Array} entry - The attribute entry to check.
   * @returns {boolean} A boolean indicating if the attribute is the 'key' attribute.
   */
  static #is ([key, value]) {
    return /^(?<attr>key)$/.test(key) && value !== undefined
  }
}

export default Key
