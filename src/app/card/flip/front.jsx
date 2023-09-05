import h from '@standard/h'
import position from './position'
import stack from '@elements/stack'

function component (_props, children) {
  return (
    <stack.Div equal={position.FRONT} column>
      {children}
    </stack.Div>
  )
}

export default component
