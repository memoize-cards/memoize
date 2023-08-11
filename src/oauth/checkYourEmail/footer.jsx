import ClickToResend from './clickToResend'
import h from '@standard/h'
import LogIn from './logIn'
import stack from '@elements/stack'
import text from '@elements/text'
import translate from './translate'

function component () {
  return (
    <stack.Footer column>
      <stack.Div center nano>
        <text.Span master xxs>{translate.footer}</text.Span>
        <ClickToResend />
      </stack.Div>
      <stack.Div center>
        <LogIn />
      </stack.Div>
    </stack.Footer>
  )
}

export default component
