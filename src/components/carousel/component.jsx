import h from '@standard/h'
import Header from './header'
import Metro from './metro'
import Pagination from './pagination'
import style from './style'

/**
 * Function component that renders the carousel.
 *
 * @function
 * @memberof module:@components/carousel/component
 * @param {Carousel} carousel - The carousel instance to be rendered.
 * @returns {JSX.Element} The JSX representation of the carousel component.
 */
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
