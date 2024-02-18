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

function background (props) {
  const color = colors.find((key) => props[key])
  return color
    ? `var(--color-${color})`
    : 'transparent'
}

export default background
