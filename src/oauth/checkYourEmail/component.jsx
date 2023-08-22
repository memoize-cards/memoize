import Footer from './footer'
import Form from '@elements/form'
import h from '@standard/h'
import Header from './header'
import Main from '@elements/main'
import OpenEmailApp from './openEmailApp'

function component (auth) {
  return (
    <Main tall>
      <Header />
      <Form onSubmit={() => auth.openEmailApp()}>
        <OpenEmailApp />
      </Form>
      <Footer />
    </Main>
  )
}

export default component
