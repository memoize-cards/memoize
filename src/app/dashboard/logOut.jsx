import { urlFor } from '@standard/router'
import h from '@standard/h'
import text from '@elements/text'

function component () {
  return (
    <text.A href={urlFor('logOut')} primary xxs medium>Log Out</text.A>
  )
}

export default component
