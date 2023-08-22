import Email from '@components/email'
import Footer from './footer'
import ForgotPassword from './forgotPassword'
import Form from '@elements/form'
import h from '@standard/h'
import Header from './header'
import Main from '@elements/main'
import Password from '@components/password'
import SignIn from './signIn'

function component (auth) {
  return (
    <Main tall>
      <Header />
      <Form onSubmit={(e) => auth.logIn(e)}>
        <Email value={auth.email} />
        <Password value={auth.password} />
        <ForgotPassword />
        <SignIn />
      </Form>
      <Footer />
    </Main>
  )
}

export default component
