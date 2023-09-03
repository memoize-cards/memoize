import h from '@standard/h'
import icon from '@elements/icon'
import style from './style'

function component (props) {
  return (
    <button className={style.master__historyBack} onClick={() => (props.onBack?.() ?? history.go(-1))}>
      <icon.Keyboard_backspace large />
    </button>
  )
}

export default component
