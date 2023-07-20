import magic from '@standard/magic'

/**
 * The render function is responsible for rendering a DOM element node by appending it to
 * the specified parent node. It calls the 'render.flow' method of the element to get the
 * rendered element node and appends it to the provided node.
 *
 * @param {Node} node - The parent DOM node to which the element node will be appended.
 * @param {Element} element - The element object that needs to be rendered.
 */
function render (node, element) {
  node.append(element[render.flow]())
}

/**
 * Symbolic constant used for identifying the 'render.flow' method of an element object.
 */
Object.assign(render, {
  flow: magic.render_flow
})

export default render
