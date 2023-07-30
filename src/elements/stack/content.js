/**
 * @typedef {'start'|'center'|'end'} ContentModifier - One of the valid content modifiers.
 */
const modifiers = [
  'start',
  'center',
  'end'
]

/**
 * Returns the first content modifier present in the properties or the default value 'start'.
 *
 * @param {Object.<ContentModifier, boolean>} props - The component properties containing the content modifiers.
 * @returns {ContentModifier} The first content modifier found or 'start' if none is present.
 */
function content (props) {
  return modifiers.find((modifier) => props[modifier]) ?? 'start'
}

export default content
