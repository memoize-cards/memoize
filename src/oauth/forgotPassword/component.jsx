import Email from '@oauth/email'
import Footer from './footer'
import Form from '@elements/form'
import h from '@standard/h'
import Header from './header'
import Master from '@oauth/master'
import ResetPassword from './resetPassword'

function component (auth) {
  return (
    <Master>
      <Header />
      <Form onSubmit={(e) => auth.forgotPassword(e)}>
        <Email />
        <ResetPassword />
      </Form>
      <Footer />
    </Master>
  )
}

export default component
