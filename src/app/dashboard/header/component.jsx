import Avatar from './avatar'
import h from '@standard/h'
import LogOut from './logOut'
import stack from '@elements/stack'
import style from './style'
import User from './user'

function component () {
  return (
    <header className={style.header}>
      <Avatar />
      <stack.Div column quarck>
        <User />
        <LogOut />
      </stack.Div>
    </header>
  )
}

export default component
