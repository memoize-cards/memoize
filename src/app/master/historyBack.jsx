import h from '@standard/h'
import icon from '@elements/icon'
import style from './style'

function component () {
  return (
    <button className={style.master__historyBack} onClick={() => history.go(-1)}>
      <icon.Keyboard_backspace large />
    </button>
  )
}

export default component