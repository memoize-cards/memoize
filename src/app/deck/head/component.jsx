import Description from './description'
import Edit from './edit'
import h from '@standard/h'
import Name from './name'
import stack from '@elements/stack'

function component () {
  return (
    <stack.Header column nano>
      <Name />
      <Description />
      <Edit />
    </stack.Header>
  )
}

export default component
