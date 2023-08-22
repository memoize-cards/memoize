import Continue from './continue'
import Footer from './footer'
import Form from '@elements/form'
import h from '@standard/h'
import Header from './header'
import Main from '@elements/main'

function component (auth) {
  return (
    <Main tall>
      <Header />
      <Form onSubmit={(e) => auth.continue(e)}>
        <Continue />
      </Form>
      <Footer />
    </Main>
  )
}

export default component
