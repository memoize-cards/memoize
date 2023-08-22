import { urlFor } from '@standard/router'
import Calendar from '@components/calendar'
import h from '@standard/h'
import Main from './main'
import text from '@elements/text'
import User from './user'

function component () {
  return (
    <Main>
      <User />
      <Calendar />
      <text.A href={urlFor('logOut')} xxxs>logout</text.A>
    </Main>
  )
}

export default component
