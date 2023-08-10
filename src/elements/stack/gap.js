const gaps = [
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
  const gap = gaps.find((modifier) => props[modifier]) ?? 'xs'
  return `var(--spacing_inset-${gap})`
}

export default gap
