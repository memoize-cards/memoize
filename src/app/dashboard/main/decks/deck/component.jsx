import h from '@standard/h'
import stack from '@elements/stack'
import style from './style'
import text from '@elements/text'

function component (deck) {
  return (
    <div className={style.deck} onClick={() => deck.select()}>
      <stack.Div column quarck>
        <text.Span master dark xs bold highlight>{deck.name}</text.Span>
        <text.Span master xxxs>{deck.description}</text.Span>
      </stack.Div>
    </div>
  )
}

export default component
