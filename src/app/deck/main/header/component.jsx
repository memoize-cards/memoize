import Description from './description'
import h from '@standard/h'
import Name from './name'
import stack from '@elements/stack'

function component () {
  return (
    <stack.Header>
      <stack.HGroup column nano>
        <Name />
        <Description />
      </stack.HGroup>
    </stack.Header>
  )
}

export default component
