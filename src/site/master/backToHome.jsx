import { urlFor } from '@standard/router'
import h from '@standard/h'
import icon from '@elements/icon'
import style from './style'

function component () {
  return (
    <button className={style.master__backToHome} onClick={() => location.assign(urlFor('home'))}>
      <icon.Keyboard_backspace large />
    </button>
  )
}

export default component
