import { render } from '@standard/h'

/**
 * Function that checks if an element has the 'render.flow' property and, if so, calls it as a function.
 *
 * @param {Object} element The element to be checked, and if the 'render.flow' property is present, it will be called as a function.
 * @returns {*} The return value of the 'render.flow' function if it's present, otherwise returns 'undefined'.
 */
function renderer (element) {
  return element[render.flow]?.()
}

export default renderer
