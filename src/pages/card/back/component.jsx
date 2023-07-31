import h from '@standard/h'
import style from './style'

function component (back) {
  return (
    <div className={style.back} onInput={(e) => back.change(e)} contenteditable />
  )
}

export default component
