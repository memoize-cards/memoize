import h from '@standard/h'
import redirectTo from './redirectTo'
import style from './style'
import text from '@elements/text'
import translate from './translate'

function component () {
  return (
    <div className={style.termsOfUse}>
      <text.Span className={style.termsOfUse__text} onClick={() => redirectTo.termsOfUse()} primary xxxs>{translate.termsOfUse}</text.Span>
    </div>
  )
}

export default component
