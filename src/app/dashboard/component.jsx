import Calendar from '@components/calendar'
import Footer from './footer'
import h from '@standard/h'
import Main from '@elements/main'
import User from './user'

function component () {
  return (
    <Main>
      <User />
      <Calendar />
      <Footer />
    </Main>
  )
}

export default component
