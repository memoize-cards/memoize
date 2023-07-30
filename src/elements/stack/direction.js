/**
 * @typedef {'row'|'column'} DirectionModifier - One of the valid direction modifiers.
 */
const modifiers = [
  'row',
  'column'
]

/**
 * Returns the first direction modifier present in the properties or the default value 'row'.
 *
 * @param {Object.<DirectionModifier, boolean>} props - The component properties containing the direction modifiers.
 * @returns {DirectionModifier} The first direction modifier found or 'row' if none is present.
 */
function direction (props) {
  return modifiers.find((modifier) => props[modifier]) ?? 'row'
}

export default direction
