/**
 * @typedef {'left'|'center'|'right'} Alignment - One of the valid alignment values.
 */
const modifiers = [
  'left',
  'center',
  'right'
]

/**
 * Aligns the content based on the provided props.
 *
 * @param {Object.<AlignmentModifier, boolean>} props - The props object containing alignment modifiers.
 * @returns {string} The calculated alignment. One of: 'left', 'center', 'right', or 'inherit' (default).
 */
function align (props) {
  return modifiers.find((modifier) => props[modifier]) ?? 'inherit'
}

export default align
