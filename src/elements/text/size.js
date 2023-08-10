const sizes = [
  'xxxs',
  'xxs',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  'xxl',
  'xxxl',
  'display',
  'giant'
]

function size (props) {
  const size = sizes.find((key) => props[key]) ?? 'xs'
  return `var(--font-size-${size})`
}

export default size
