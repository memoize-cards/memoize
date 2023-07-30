/**
 * @typedef {'top'|'middle'|'bottom'} AlignmentModifier - One of the valid alignment modifiers.
 */
const modifiers = [
  'top',
  'middle',
  'bottom'
]

/**
 * Maps alignment modifiers to alignment keywords.
 *
 * @type {Object.<AlignmentModifier, string>}
 */
const mapper = {
  top: 'start',
  middle: 'center',
  bottom: 'end'
}

/**
 * Returns the alignment keyword based on the provided properties.
 *
 * @param {Props} props - The component properties containing the alignment modifiers.
 * @returns {string} The corresponding alignment keyword.
 */
function align (props) {
  return mapper[modifiers.find((modifier) => props[modifier]) ?? mapper.top]
}

export default align
