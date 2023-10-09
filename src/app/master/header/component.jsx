import h from '@standard/h'
import Logo from '@elements/logo'
import style from './style'
import User from './user'

function component () {
  return (
    <header className={style.header}>
      <Logo />
      <User />
    </header>
  )
}

export default component
