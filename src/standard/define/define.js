/**
 * Define a custom element.
 *
 * @param {string} name - The name of the custom element. It must contain a hyphen (-) and be in lowercase.
 * @param {object} [options] - An object with options for the custom element definition.
 * @param {string} [options.extends] - The tag name of the native HTML element that the custom element extends.
 * @returns {Function} - A function that takes a ClassRef parameter and registers the custom element with the specified name and class using customElements.define.
 */
function define (name, options) {
  return (ClassRef) => customElements.define(name, ClassRef, options)
}

export default define
