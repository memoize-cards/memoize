import Edit from './edit'
import Front from './front'
import h from '@standard/h'
import stack from '@elements/stack'
import Type from './type'

function component () {
  return (
    <stack.Header column>
      <Type />
      <Front />
      <Edit />
    </stack.Header>
  )
}

export default component
