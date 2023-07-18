import h from '@standard/h'
import Header from '@elements/header'
import Metro from '@elements/metro'
import style from './style'

function component (carousel) {
  return (
    <div className={style.carousel}>
      <Header />
      <Metro>
        {carousel.cards}
      </Metro>
    </div>
  )
}

export default component
