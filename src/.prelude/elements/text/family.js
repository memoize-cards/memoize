const families = [
  'base',
  'highlight'
]

function family (props) {
  const family = families.find((key) => props[key]) ?? 'base'
  return `var(--font-family-${family})`
}

export default family
