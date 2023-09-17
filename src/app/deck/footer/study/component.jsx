import Button from '@elements/button'
import h, { Fragment } from '@standard/h'
import Hide from '@directive/hide'
import redirectTo from './redirectTo'
import Show from '@directive/show'
import stack from '@elements/stack'
import text from '@elements/text'
import translate from './translate'

function component (study) {
  return (
    <>
      <Show when={study.count}>
        <Button onClick={() => redirectTo.card()} primary wide>{translate.study} ( {study.count} )</Button>
      </Show>
      <Hide when={study.count}>
        <stack.Div middle center>
          <text.Span master xxxs>{translate.wait}</text.Span>
        </stack.Div>
      </Hide>
    </>
  )
}

export default component
