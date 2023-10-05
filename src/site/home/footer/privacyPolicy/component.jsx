import h from '@standard/h'
import redirectTo from './redirectTo'
import style from './style'
import text from '@elements/text'
import translate from './translate'

function component () {
  return (
    <div className={style.privacyPolicy}>
      <text.Span className={style.privacyPolicy__text} onClick={() => redirectTo.privacyPolicy()} primary xxxs>{translate.privacyPolicy}</text.Span>
    </div>
  )
}

export default component
