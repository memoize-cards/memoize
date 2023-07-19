import reflow from './reflow'

/**
 * Represents an attribute with a key-value pair.
 */
class Attribute {
  /**
   * The key of the attribute.
   *
   * @type {string}
   */
  #key

  /**
   * The value of the attribute.
   *
   * @type {any}
   */
  #value

  /**
   * Get the key of the attribute.
   *
   * @returns {string} The key of the attribute.
   */
  get key () {
    return this.#key
  }

  /**
   * Get the value of the attribute.
   *
   * @returns {any} The value of the attribute.
   */
  get value () {
    return this.#value
  }

  /**
   * Create a new Attribute instance.
   *
   * @param {string} key - The key of the attribute.
   * @param {any} value - The value of the attribute.
   */
  constructor (key, value) {
    this.#key = key
    this.#value = value
  }

  /**
   * Check if the attribute is different from another attribute.
   *
   * @param {Attribute} nAttr - The attribute to compare.
   * @returns {boolean} `true` if the attributes are different, `false` otherwise.
   */
  [reflow.different] (nAttr) {
    return (
      this.key !== nAttr.key ||
      this.value !== nAttr.value
    )
  }

  /**
   * Get an iterator for the attribute.
   *
   * @generator
   * @yields {string} The key of the attribute.
   * @yields {any} The value of the attribute.
   */
  * [Symbol.iterator] () {
    yield this.key
    yield this.value
  }

  /**
   * Create an Attribute instance from a key-value pair.
   *
   * @private
   * @static
   * @param {Array} attr - The key-value pair representing the attribute.
   * @returns {Attribute} The created Attribute instance.
   */
  static #create (attr) {
    return new Attribute(...attr)
  }

  /**
   * Check if a key-value pair is a valid attribute.
   *
   * @private
   * @static
   * @param {Array} attr - The key-value pair representing the attribute.
   * @returns {boolean} `true` if the key-value pair is a valid attribute, `false` otherwise.
   */
  static #is ([key, value]) {
    return !/^(?<attrs>className|is|on[A-Z].+)$/.test(key) && Boolean(value)
  }

  /**
   * Map an array of key-value pairs to Attribute instances.
   *
   * @static
   * @param {Array} attrList - The array of key-value pairs representing attributes.
   * @returns {Array<Attribute>} The mapped Attribute instances.
   */
  static mapper (attrList) {
    return attrList
      .filter(Attribute.#is)
      .map(Attribute.#create)
  }
}

export default Attribute
