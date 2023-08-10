/**
 * @typedef {'start'|'center'|'end'} Contents - One of the valid content values.
 */
const contents = [
  'start',
  'center',
  'end'
]

/**
 * Returns the first content value present in the properties or the default value 'start'.
 *
 * @param {Object.<Contents, boolean>} props - The component properties containing the content values.
 * @returns {string} The calculated content. One of: 'start', 'center', 'end', or 'start' (default).
 */
function content (props) {
  return contents.find((key) => props[key]) ?? 'start'
}

export default content
