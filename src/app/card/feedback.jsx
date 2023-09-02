import h from '@standard/h'
import text from '@elements/text'
import translate from './translate'

function component () {
  return (
    <text.Span master dark highlight xs bold>{translate.feedback}</text.Span>
  )
}

export default component
