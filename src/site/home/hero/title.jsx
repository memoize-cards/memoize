import h from '@standard/h'
import text from '@elements/text'
import translate from './translate'

function component () {
  return (
    <text.H1 master dark lg highlight bold>{translate.title}</text.H1>
  )
}

export default component
