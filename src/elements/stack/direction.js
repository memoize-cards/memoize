/**
 * @typedef {'row'|'column'} Directions - One of the valid direction values.
 */
const directions = [
  'row',
  'column'
]

/**
 * Returns the first direction value present in the properties or the default value 'row'.
 *
 * @param {Object.<Directions, boolean>} props - The component properties containing the direction values.
 * @returns {string} The calculated direction. One of: 'row', 'column' or 'row' (default).
 */
function direction (props) {
  return directions.find((key) => props[key]) ?? 'row'
}

export default direction
