import h from '@standard/h'
import LogIn from './logIn'
import stack from '@elements/stack'
import text from '@elements/text'
import translate from './translate'

function component () {
  return (
    <stack.Footer center nano>
      <text.Span master xxxs>{translate.footer}</text.Span>
      <LogIn />
    </stack.Footer>
  )
}

export default component
