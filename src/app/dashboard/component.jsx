import { urlFor } from '@standard/router'
import h from '@standard/h'
import Main from './main'
import text from '@elements/text'
import User from './user'

function component () {
  return (
    <Main>
      <User />
      <text.A href={urlFor('logOut')} xxxs>logout</text.A>
    </Main>
  )
}

export default component
