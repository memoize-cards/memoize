import Footer from './footer'
import Form from '@elements/form'
import h from '@standard/h'
import Header from './header'
import Master from '@oauth/master'
import OpenEmailApp from './openEmailApp'

function component (auth) {
  return (
    <Master>
      <Header />
      <Form onSubmit={() => auth.openEmailApp()}>
        <OpenEmailApp />
      </Form>
      <Footer />
    </Master>
  )
}

export default component
