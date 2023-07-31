import h from '@standard/h'
import style from './style'

function component (back) {
  return (
    <div className={style.back}>
      {back.value}
    </div>
  )
}

export default component
