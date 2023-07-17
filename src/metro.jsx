import h from '@standard/h'
import style from './style'

function metro (_props, children) {
  return (
    <div className={style.metro}>
      <div className={style.metro__container}>
        {children}
      </div>
    </div>
  )
}

export default metro
