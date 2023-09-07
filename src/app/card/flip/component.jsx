import Choose from '@directive/choose'
import h, { Fragment } from '@standard/h'
import position from './position'
import stack from '@elements/stack'

function component (flip, children) {
  return (
    <>
      <Choose when={flip.position}>
        <stack.Div equal={position.FRONT} column>{children.front}</stack.Div>
        <stack.Div equal={position.BACK} column>{children.back}</stack.Div>
      </Choose>
    </>
  )
}

export default component
