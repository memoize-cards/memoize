/**
 * @typedef {'top'|'middle'|'bottom'} Alignments - One of the valid align values.
 */
const alignments = [
  'top',
  'middle',
  'bottom'
]

/**
 * Maps alignment values to alignment keywords.
 *
 * @type {Object.<Alignments, string>}
 */
const mapper = {
  top: 'start',
  middle: 'center',
  bottom: 'end'
}

/**
 * Returns the alignment keyword based on the provided properties.
 *
 * @param {Object.<Alignments, boolean>} props - The component properties containing the alignment values.
 * @returns {string} The calculated alignment. One of: 'top', 'middle', 'bottom', or 'top' (default).
 */
function align (props) {
  return mapper[alignments.find((key) => props[key])] ?? mapper.top
}

export default align
