import h from '@standard/h'
import style from './style'
import text from '@elements/text'

function component () {
  return (
    <text.H1 className={style.login__title} master dark highlight md bold>{component.title}</text.H1>
  )
}

Object.assign(component, {
  title: 'Log in to your account'
})

export default component
