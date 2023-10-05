import GetStarted from './getStarted'
import h from '@standard/h'
import Logo from '@elements/logo'
import style from './style'

function component () {
  return (
    <header className={style.header}>
      <Logo />
      <GetStarted />
    </header>
  )
}

export default component
