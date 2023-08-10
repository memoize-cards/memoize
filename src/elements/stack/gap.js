/**
 * @typedef {'quarck'|'nano'|'xs'|'sm'|'md'|'lg'|'huge'|'giant'} Gaps - One of the valid spacing values.
 */
const gaps = [
  'quarck',
  'nano',
  'xs',
  'sm',
  'md',
  'lg',
  'huge',
  'giant'
]

/**
 * Calculates the gap value based on the provided props.
 *
 * @param {Object.<Gaps, boolean>} props - The props object containing gap value.
 * @returns {string} The calculated gap value. One of: 'quarck', 'nano', 'xs', 'sm', 'md', 'lg', 'huge', 'giant' or 'xs' (default).
 */
function gap (props) {
  const gap = gaps.find((modifier) => props[modifier]) ?? 'xs'
  return `var(--spacing_inset-${gap})`
}

export default gap
