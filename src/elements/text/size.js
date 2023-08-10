/**
 * @typedef {'xxxs'|'xxs'|'xs'|'sm'|'md'|'lg'|'xl'|'xxl'|'xxxl'|'display'|'giant'} Size - One of the valid size.
 */
const sizes = [
  'xxxs',
  'xxs',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  'xxl',
  'xxxl',
  'display',
  'giant'
]

/**
 * Computes the CSS variable representing the desired font size based on the provided props.
 *
 * @param {Object.<Size, boolean>} props - The props object containing font size value properties.
 * @returns {string} The calculated size. One of: 'xs', 'xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl', 'display', 'giant' or 'xs' (default).
 */
function size (props) {
  const size = sizes.find((key) => props[key]) ?? 'xs'
  return `var(--font-size-${size})`
}

export default size
