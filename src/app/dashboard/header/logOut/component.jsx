import h from '@standard/h'
import redirectTo from './redirectTo'
import text from '@elements/text'
import translate from './translate'

function component () {
  return (
    <text.A onClick={() => redirectTo.logOut()} href='#' primary xxxs medium>{translate.logOut}</text.A>
  )
}

export default component
