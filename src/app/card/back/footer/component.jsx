import Button from '@elements/button'
import h from '@standard/h'
import hook from '@standard/hook'
import stack from '@elements/stack'
import style from './style'
import text from '@elements/text'
import translate from './translate'

function component () {
  return (
    <stack.Footer column xs wide>
      <text.Span master dark highlight xxs bold>{translate.title}</text.Span>
      <div className={style.footer__feedback}>
        <Button onClick={() => hook.easy()} complete wide>{translate.easy}</Button>
        <Button onClick={() => hook.good()} success wide>{translate.good}</Button>
        <Button onClick={() => hook.hard()} warning wide>{translate.hard}</Button>
        <Button onClick={() => hook.again()} danger wide>{translate.again}</Button>
      </div>
    </stack.Footer>
  )
}

export default component
