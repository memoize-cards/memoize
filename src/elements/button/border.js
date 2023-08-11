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

function border (props) {
  const color = colors.find((key) => props[key])
  return color
    ? `var(--color-${color})`
    : 'var(--color-master)'
}

export default border
