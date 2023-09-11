import { position } from '@app/card/flip'
import global from '@standard/global'
import h from '@standard/h'
import stack from '@elements/stack'
import Tag from '@elements/tag'
import text from '@elements/text'

function component () {
  return (
    <stack.Div slot={position.FRONT} column>
      <Tag info>{global.type}</Tag>
      <text.Pre master dark md medium>{global.front}</text.Pre>
    </stack.Div>
  )
}

export default component
