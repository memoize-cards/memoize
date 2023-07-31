import h from '@standard/h'
import style from './style'

function component (front) {
  return (
    <div className={style.front}>
      {front.value}
    </div>
  )
}

export default component
