import { args } from '@standard/router'
import h from '@standard/h'
import text from '@elements/text'

function component () {
  return (
    <text.Strong master dark xxxs medium>{args.email}</text.Strong>
  )
}

export default component
