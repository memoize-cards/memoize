import { urlFor } from '@standard/router'
import h from '@standard/h'
import Main from './main'
import text from '@elements/text'

function component (dashboard) {
  return (
    <Main>
      <text.H1 master dark lg bold>Ola, {dashboard.name}</text.H1><br />
      <text.A href={urlFor('logOut')} xxxs>logout</text.A>
    </Main>
  )
}

export default component
