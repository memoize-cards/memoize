const modifiers = [
  'quarck',
  'nano',
  'xs',
  'sm',
  'md',
  'lg',
  'huge',
  'giant'
]

function gap (props) {
  const modifier = modifiers.find((modifier) => props[modifier]) ?? 'xs'
  return `var(--spacing_inset-${modifier})`
}

export default gap
