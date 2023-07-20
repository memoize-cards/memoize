import h from '@standard/h'
import Header from './header'
import Metro from './metro'
import Pagination from './pagination'
import style from './style'

function component (carousel) {
  return (
    <div className={style.carousel}>
      <Header category={carousel.category} />
      <Pagination channel={carousel.channel} />
      <Metro channel={carousel.channel}>
        {carousel.cards}
      </Metro>
    </div>
  )
}

export default component
