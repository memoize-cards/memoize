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
  const gap = gaps.find((modifier) => props[modifier])
  return gap
    ? `var(--spacing_inset-${gap})`
    : '0'
}

export default gap
