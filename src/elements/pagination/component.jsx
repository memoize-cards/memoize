import h from '@standard/h'
import icon from '@elements/icon'
import style from './style'

function component (props) {
  return (
    <div className={style.pagination}>
      <button className={style.pagination__button} onClick={props.onPrev}>
        <icon.CaretLeft />
      </button>
      <button className={style.pagination__button} onClick={props.onNext}>
        <icon.CaretRight />
      </button>
    </div>
  )
}

export default component
