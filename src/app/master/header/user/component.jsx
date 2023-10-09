import Avatar from './avatar'
import h from '@standard/h'
import LogOut from './logOut'
import Name from './name'
import stack from '@elements/stack'

function component () {
  return (
    <stack.Div nano>
      <stack.Div column right>
        <Name />
        <LogOut />
      </stack.Div>
      <Avatar />
    </stack.Div>
  )
}

export default component
