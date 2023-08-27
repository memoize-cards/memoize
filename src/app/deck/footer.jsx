import Cancel from './cancel'
import ClickToEdit from './clickToEdit'
import h from '@standard/h'
import stack from '@elements/stack'
import text from '@elements/text'
import translate from './translate'

function component () {
  return (
    <stack.Footer column>
      <stack.Div center nano>
        <text.Span master xxs>{translate.footer}</text.Span>
        <ClickToEdit />
      </stack.Div>
      <stack.Div center>
        <Cancel />
      </stack.Div>
    </stack.Footer>
  )
}

export default component
