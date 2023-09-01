import h from '@standard/h'
import text from '@elements/text'
import translate from './translate'

function component (props) {
  return (
    <text.A {...props} href='#' primary xxs medium>{translate.edit}</text.A>
  )
}

export default component
