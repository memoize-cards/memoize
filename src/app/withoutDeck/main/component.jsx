import h from '@standard/h'
import HGroup from './hgroup'
import media from './media.svg'
import style from './style'

function component () {
  return (
    <main className={style.main}>
      <img className={style.main__illustration} src={media} alt='Memoize' loading='eager' />
      <HGroup />
    </main>
  )
}

export default component
