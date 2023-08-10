/**
 * @typedef {'base'|'highlight'} Family - One of the valid family.
 */
const families = [
  'base',
  'highlight'
]

/**
 * Computes the CSS variable representing the desired font family based on the provided props.
 *
 * @param {Object.<Family, boolean>} props - The props object containing font family value properties.
 * @returns {string} The calculated family. One of: 'base', 'highlight' or 'base' (default).
 */
function family (props) {
  const family = families.find((key) => props[key]) ?? 'base'
  return `var(--font-family-${family})`
}

export default family
