import Component from './component'
import Element from './element'

/**
 * Create a virtual element (either Element or Component) based on the provided node name, attributes, and children.
 * If the node name is recognized as a Component, it will be executed with the given attributes and children.
 * Otherwise, it will create an Element with the provided attributes and children.
 *
 * @function
 * @param {string | Function} nodeName - The node name or Component function to create.
 * @param {Object} attrs - The attributes for the virtual element.
 * @param {...Element | string} children - The children elements or text nodes of the virtual element.
 * @returns {Element | Component} The created virtual element.
 */
function h (nodeName, attrs, ...children) {
  attrs ??= {}
  if (Element.is(nodeName)) return Element.create(nodeName, attrs, children)
  if (Component.is(nodeName)) return Component.execute(nodeName, attrs, children)
}

export default h
