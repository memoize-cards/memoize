import global from '@standard/global'
import h from '@standard/h'
import stack from '@elements/stack'
import text from '@elements/text'

function component () {
  return (
    <stack.Header column center giant>
      <stack.HGroup column center quarck>
        <text.H1 master dark highlight md bold center>{global.name}</text.H1>
        <text.H2 master dark xxs center>{global.description}</text.H2>
      </stack.HGroup>
    </stack.Header>
  )
}

export default component
