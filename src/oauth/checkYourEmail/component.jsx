import Footer from './footer'
import Form from '@elements/form'
import h from '@standard/h'
import Header from './header'
import Main from './main'
import OpenEmailApp from './openEmailApp'

function component () {
  return (
    <Main>
      <Header />
      <Form>
        <OpenEmailApp />
      </Form>
      <Footer />
    </Main>
  )
}

export default component