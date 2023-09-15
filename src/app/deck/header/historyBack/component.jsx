import h from '@standard/h'
import icon from '@elements/icon'
import redirectTo from './redirectTo'
import style from './style'

function component () {
  return (
    <button className={style.historyBack} onClick={() => redirectTo.back()}>
      <icon.Keyboard_backspace large />
    </button>
  )
}

export default component
