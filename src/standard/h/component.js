import Slot from './slot'

/**
 * Represents a component utility.
 */
class Component {
  /**
   * Execute the component function with the provided attributes and children.
   *
   * @static
   * @param {Function} functionRef - The component function.
   * @param {Object} attrs - The component attributes.
   * @param {Array} children - The component children.
   * @returns {*} The result of executing the component function.
   */
  static execute (functionRef, attrs, children) {
    children = children.flat(Infinity)
    children = children.filter(Boolean)
    children = Slot.mapper(children)
    return functionRef(attrs, children)
  }

  /**
   * Check if the given node name is a component.
   *
   * @static
   * @param {*} nodeName - The node name.
   * @returns {boolean} `true` if the node name is a component, otherwise `false`.
   */
  static is (nodeName) {
    return typeof nodeName === 'function'
  }
}

export default Component
