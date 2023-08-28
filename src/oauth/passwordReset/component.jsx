import Continue from './continue'
import Footer from './footer'
import Form from '@elements/form'
import h from '@standard/h'
import Header from './header'
import Master from '@oauth/master'

function component (auth) {
  return (
    <Master>
      <Header />
      <Form onSubmit={(e) => auth.continue(e)}>
        <Continue />
      </Form>
      <Footer />
    </Master>
  )
}

export default component
