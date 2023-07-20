/**
 * Represents a Slot attribute that can be used to distribute children elements in a component.
 */
class Slot {
  #value

  /**
   * Get the value of the Slot attribute.
   * @returns {*} The value of the Slot attribute.
   */
  get value () {
    return this.#value
  }

  /**
   * Create a new Slot instance.
   * @param {*} value - The value of the Slot attribute.
   */
  constructor (value) {
    this.#value = value
  }

  /**
   * Create a Slot instance from an attribute list.
   * @param {Array} attrList - The attribute list to search for the Slot attribute.
   * @returns {Slot} A new Slot instance.
   */
  static create (attrList) {
    const [, value] = attrList.find?.(Slot.#is) ?? []
    return new Slot(value)
  }

  /**
   * Internal static method to check if a given attribute is a Slot attribute.
   * @private
   * @param {Array} [key, value] - The key-value pair representing an attribute.
   * @returns {boolean} True if the attribute is a Slot attribute and has a value.
   */
  static #is ([key, value]) {
    return /^(?<attr>slot)$/.test(key) && value !== undefined
  }

  /**
   * Map and group children elements based on the Slot attribute values.
   * @param {Array} children - The array of children elements to map and group.
   * @returns {Object} An object with keys as Slot values and values as corresponding grouped children elements.
   */
  static mapper (children) {
    return Object.assign(
      children,
      children.group(({ slot }) => (slot))
    )
  }
}

export default Slot
