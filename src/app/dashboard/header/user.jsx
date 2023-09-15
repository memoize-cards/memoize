import { urlFor } from '@standard/router'
import Avatar from '@elements/avatar'
import cookie from '@standard/cookie'
import h from '@standard/h'
import stack from '@elements/stack'
import text from '@elements/text'
import translate from './translate'

function component () {
  return (
    <stack.Div middle xs>
      <Avatar src={cookie.avatar} large />
      <stack.Div column>
        <text.Span master xxxs>{translate.hello}</text.Span>
        <text.Span master dark sm highlight bold>{cookie.name}</text.Span>
        <text.A href={urlFor('logOut')} primary xxxs medium>{translate.logOut}</text.A>
      </stack.Div>
    </stack.Div>
  )
}

export default component
