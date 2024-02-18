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

const modifiers = [
  'darkest',
  'darker',
  'dark',
  'light',
  'lighter',
  'lightest'
]

function color (props) {
  const color = colors.find((key) => props[key]) ?? 'master'
  const modifier = modifiers.find((key) => props[key])
  return `var(--color-${[color, modifier].filter(Boolean).join('-')})`
}

export default color
