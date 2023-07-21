/**
 * Shows child elements based on a condition specified by the `when` attribute.
 *
 * @param {object} props - The props object containing the `when` attribute.
 * @param {boolean} props.when - The condition to determine whether to show the child elements.
 * @param {Array<HTMLElement>} children - The array of child elements.
 * @returns {Array<HTMLElement>} - An array of child elements to display (if `when` is truthy) or an empty array (if `when` is falsy).
 */
function show (props, children) {
  return props.when ? children : []
}

export default show
