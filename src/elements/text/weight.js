/**
 * @typedef {'bold'|'medium'|'regular'} Weight - One of the valid weight
 */
const weights = [
  'bold',
  'medium',
  'regular'
]

/**
 * Computes the CSS variable representing the desired font weight based on the provided props.
 *
 * @param {Object.<Weight, boolean>} props - The props object containing font weight value properties.
 * @returns {string} The calculated weight. One of: 'bold', 'medium', 'regular' or 'regular' (default).
 */
function weight (props) {
  const weight = weights.find((key) => props[key]) ?? 'regular'
  return `var(--font-weight-${weight})`
}

export default weight
