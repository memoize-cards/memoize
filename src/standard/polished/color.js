/**
 * Array of allowed color names.
 * @type {string[]}
 */
const colors = [
  'neutral',
  'black',
  'white'
]

/**
 * Array of allowed color modifiers.
 * @type {string[]}
 */
const modifiers = [
  'm50',
  'm100',
  'm200',
  'm300',
  'm400',
  'm500',
  'm600',
  'm700',
  'm800',
  'm900',
  'a100',
  'a200',
  'a400',
  'a700'
]

/**
 * Computes the CSS variable representing the desired color based on the provided props.
 *
 * @param {Object} props - The props object containing color and modifier properties.
 * @returns {string} The CSS variable representing the desired color with the applied modifier (if any).
 */
function color (props) {
  const color = colors.find((color) => props[color]) ?? 'black'
  const modifier = modifiers.find((modifier) => props[modifier])
  return `var(--color-${[color, modifier].filter(Boolean).join('-')})`
}

export default color
