import Avatar from '@elements/avatar'
import cookie from '@standard/cookie'
import h from '@standard/h'
import stack from '@elements/stack'
import text from '@elements/text'

function component () {
  return (
    <stack.Div middle>
      <Avatar large />
      <stack.Div column quarck>
        <text.Span master dark xxs>Let's study</text.Span>
        <text.Span master dark md highlight bold>{cookie.name}</text.Span>
      </stack.Div>
    </stack.Div>
  )
}

export default component
