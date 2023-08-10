import h from '@standard/h'
import style from './style'
import text from '@standard/text'

function component () {
  return (
    <text.H2 className={style.login__description} master dark xxs>{component.description}</text.H2>
  )
}

Object.assign(component, {
  description: 'Welcome back! Please enter your details'
})

export default component
