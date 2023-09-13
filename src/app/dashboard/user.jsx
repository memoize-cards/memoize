import Avatar from '@elements/avatar'
import cookie from '@standard/cookie'
import h from '@standard/h'
import stack from '@elements/stack'
import text from '@elements/text'
import translate from './translate'

function component () {
  return (
    <stack.Div middle>
      <Avatar large />
      <stack.Div column quarck>
        <text.Span master dark xxs>{translate.hello}</text.Span>
        <text.Span master dark md highlight bold>{cookie.name}</text.Span>
      </stack.Div>
    </stack.Div>
  )
}

export default component
