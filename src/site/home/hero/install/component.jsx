import h from '@standard/h'
import icon from '@elements/icon'
import style from './style'
import text from '@elements/text'
import translate from './translate'

function component (install) {
  return (
    <button className={style.install} onClick={() => install.onClick()}>
      <icon.Install_mobile master />
      <text.Span primary xxs medium>{translate.text}</text.Span>
    </button>
  )
}

export default component
