import { urlFor } from '@standard/router'
import h from '@standard/h'
import icon from '@elements/icon'
import style from './style'

function component () {
  return (
    <button className={style.master__backToHome} onClick={() => location.assign(urlFor('home'))}>
      <icon.Chevron_left large />
    </button>
  )
}

export default component
