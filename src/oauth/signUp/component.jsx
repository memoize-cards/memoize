import Email from '@oauth/email'
import Footer from './footer'
import Form from '@elements/form'
import GetStarted from './getStarted'
import h from '@standard/h'
import Header from './header'
import Master from '@oauth/master'
import Name from '@oauth/name'
import Password from '@oauth/password'

function component (auth) {
  return (
    <Master>
      <Header />
      <Form onSubmit={(e) => auth.signUp(e)}>
        <Name value={auth.name} />
        <Email value={auth.email} />
        <Password value={auth.password} />
        <GetStarted />
      </Form>
      <Footer/ >
    </Master>
  )
}

export default component
