import h from '@standard/h'
import stack from '@elements/stack'

function component (_props, children) {
  return (
    <stack.Header column center giant>
      <stack.HGroup column center quarck>
        {children}
      </stack.HGroup>
    </stack.Header>
  )
}

export default component
