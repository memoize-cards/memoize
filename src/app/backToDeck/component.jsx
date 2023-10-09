import h from '@standard/h'
import icon from '@elements/icon'
import redirectTo from './redirectTo'
import style from './style'
import text from '@elements/text'
import translate from './translate'

function component () {
  return (
    <button className={style.backToHome} onClick={() => redirectTo.deck()}>
      <icon.Arrow_back_ios small />
      <text.Span primary xxs medium>{translate.text}</text.Span>
    </button>
  )
}

export default component
