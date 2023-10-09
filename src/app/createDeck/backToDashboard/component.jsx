import h from '@standard/h'
import icon from '@elements/icon'
import redirectTo from './redirectTo'
import style from './style'
import text from '@elements/text'

function component () {
  return (
    <button className={style.backToHome} onClick={() => redirectTo.dashboard()}>
      <icon.Arrow_back_ios small />
      <text.Span primary xxs medium>Dashboard</text.Span>
    </button>
  )
}

export default component
