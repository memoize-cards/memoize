import Email from '@oauth/email'
import Footer from './footer'
import ForgotPassword from './forgotPassword'
import Form from '@elements/form'
import h from '@standard/h'
import Header from './header'
import Master from '@oauth/master'
import Password from '@oauth/password'
import SignIn from './signIn'

function component (auth) {
  return (
    <Master>
      <Header />
      <Form onSubmit={(e) => auth.logIn(e)}>
        <Email value={auth.email} />
        <Password value={auth.password} />
        <ForgotPassword />
        <SignIn />
      </Form>
      <Footer />
    </Master>
  )
}

export default component
