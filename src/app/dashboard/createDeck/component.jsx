import Button from '@elements/button'
import h from '@standard/h'
import redirectTo from './redirectTo'
import stack from '@elements/stack'
import style from './style'
import text from '@elements/text'
import translate from './translate'

function component () {
  return (
    <div className={style.createDeck}>
      <stack.Div column>
        <text.Span master darker xxs bold>{translate.title}</text.Span>
        <text.Span master xxxs>{translate.description}</text.Span>
      </stack.Div>
      <Button onClick={() => redirectTo.createDeck()} wide>{translate.createDeck}</Button>
    </div>
  )
}

export default component
