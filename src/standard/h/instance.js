import paint from './paint'

/**
 * Utility class for mapping and processing instances of elements or components.
 */
class Instance {
  /**
   * Maps the given array of children elements or components, returning their root AST or the original child if the root AST is not available.
   *
   * @static
   * @param {Array<Element|Component>} children - The array of children elements or components to map.
   * @returns {Array<Element|Component>} The mapped array of elements or components.
   */
  static mapper (children) {
    return children.map((child) => child[paint.rootAST]?.() ?? child)
  }
}

export default Instance
