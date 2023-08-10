const weights = [
  'bold',
  'medium',
  'regular'
]

function weight (props) {
  const weight = weights.find((key) => props[key]) ?? 'regular'
  return `var(--font-weight-${weight})`
}

export default weight
