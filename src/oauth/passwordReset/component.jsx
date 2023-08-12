import { urlFor } from '@standard/router'
import Continue from './continue'
import Footer from './footer'
import Form from '@elements/form'
import h from '@standard/h'
import Header from './header'
import Main from './main'

function component () {
  return (
    <Main>
      <Header />
      <Form action={urlFor('home')}>
        <Continue />
      </Form>
      <Footer />
    </Main>
  )
}

export default component
