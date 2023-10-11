import h from '@standard/h'
import SignUp from './signUp'
import stack from '@elements/stack'
import text from '@elements/text'
import translate from './translate'

function component () {
  return (
    <stack.Footer center nano>
      <text.Span master xxxs>{translate.footer}</text.Span>
      <SignUp />
    </stack.Footer>
  )
}

export default component
