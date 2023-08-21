import cookie from '@standard/cookie'
import h from '@standard/h'
import stack from '@elements/stack'
import text from '@elements/text'

function component () {
  return (
    <stack.Div column quarck>
      <text.Span master xxs>Let's study</text.Span>
      <text.Span master dark sm bold>{cookie.name}</text.Span>
    </stack.Div>
  )
}

export default component
