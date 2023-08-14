import Continue from './continue'
import Footer from './footer'
import Form from '@elements/form'
import h from '@standard/h'
import Header from './header'
import Main from './main'

function component (auth) {
  return (
    <Main>
      <Header />
      <Form onSubmit={() => auth.continue()}>
        <Continue />
      </Form>
      <Footer />
    </Main>
  )
}

export default component
