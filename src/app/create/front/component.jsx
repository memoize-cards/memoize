import h from '@standard/h'
import style from './style'

function component (front) {
  return (
    <div className={style.front} onInput={(e) => front.change(e)} contenteditable />
  )
}

export default component
