import h from '@standard/h'
import icon from '@elements/icon'
import style from './style'

function component (pagination) {
  return (
    <div className={style.pagination}>
      <button className={style.pagination__button} onClick={() => pagination.prev()}>
        <icon.CaretLeft />
      </button>
      <button className={style.pagination__button} onClick={() => pagination.next()}>
        <icon.CaretRight />
      </button>
    </div>
  )
}

export default component
