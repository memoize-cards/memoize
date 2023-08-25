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
  const color = colors.some((key) => props[key])
  return color
    ? 'var(--color-pure-white)'
    : 'var(--color-master-dark)'
}

export default border
