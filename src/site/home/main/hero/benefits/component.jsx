import h from '@standard/h'
import icon from '@elements/icon'
import stack from '@elements/stack'
import text from '@elements/text'
import translate from './translate'

function component () {
  return (
    <stack.Li xs>
      <icon.School />
      <stack.Span column>
        <text.Strong master dark xxs medium>{translate.label}</text.Strong>
        <text.Span master dark xxs>{translate.description}</text.Span>
      </stack.Span>
    </stack.Li>
  )
}

export default component
