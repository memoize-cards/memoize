import google from './google'
import h from '@standard/h'
import logo from './logo.svg'
import style from './style'
import text from '@elements/text'
import translate from './translate'

function component () {
  return (
    <button className={style.signInWithGoogle} onClick={() => google.signIn()}>
      <img src={logo} />
      <text.Span master dark xxs medium>{translate.text}</text.Span>
    </button>
  )
}

export default component
