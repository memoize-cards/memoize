import Button from '@elements/button'
import h from '@standard/h'
import hook from '@standard/hook'
import stack from '@elements/stack'
import text from '@elements/text'
import translate from './translate'

function component (props) {
  return (
    <stack.Div {...props} column>
      <text.Span master dark highlight xs bold>{translate.title}</text.Span>
      <Button onClick={() => hook.easy()} complete wide>{translate.easy}</Button>
      <Button onClick={() => hook.good()} success wide>{translate.good}</Button>
      <Button onClick={() => hook.hard()} warning wide>{translate.hard}</Button>
      <Button onClick={() => hook.again()} danger wide>{translate.again}</Button>
    </stack.Div>
  )
}

export default component
