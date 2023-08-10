/**
 * @typedef {'complete'|'danger'|'info'|'master'|'menu'|'primary'|'success'|'warning'} Color - One of the valid color.
 */
const colors = [
  'complete',
  'danger',
  'info',
  'master',
  'menu',
  'primary',
  'success',
  'warning'
]

/**
 * @typedef {'darkest'|'darker'|'dark'|'light'|'lighter'|'lightest'} Modifier - One of the valid color modifiers.
 */
const modifiers = [
  'darkest',
  'darker',
  'dark',
  'light',
  'lighter',
  'lightest'
]

/**
 * Computes the CSS variable representing the desired color based on the provided props.
 *
 * @param {Object.<Color, boolean>} props - The props object containing color properties.
 * @param {Object.<Modifier, boolean>} props - The props object containing modifier properties.
 * @returns {string} The calculated color. One of: 'complete', 'danger', 'info', 'master', 'menu', 'primary', 'success', 'warning' or 'master' (default).
 */
function color (props) {
  const color = colors.find((key) => props[key]) ?? 'master'
  const modifier = modifiers.find((key) => props[key])
  return `var(--color-${[color, modifier].filter(Boolean).join('-')})`
}

export default color
