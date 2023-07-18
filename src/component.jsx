import h from '@standard/h'
import Header from '@elements/header'
import Metro from '@elements/metro'
import Pagination from '@elements/pagination'
import style from './style'

function component (carousel) {
  return (
    <div className={style.carousel}>
      <Header category={carousel.category} />
      <Pagination />
      <Metro>
        {carousel.cards}
      </Metro>
    </div>
  )
}

export default component
