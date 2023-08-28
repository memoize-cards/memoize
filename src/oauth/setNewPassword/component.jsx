import Footer from './footer'
import Form from '@elements/form'
import h from '@standard/h'
import Header from './header'
import Master from '@oauth/master'
import Password from '@components/password'
import ResetPassword from './resetPassword'

function component (auth) {
  return (
    <Master>
      <Header />
      <Form onSubmit={(e) => auth.setNewPassword(e)}>
        <Password value={auth.password} supporting />
        <ResetPassword />
      </Form>
      <Footer />
    </Master>
  )
}

export default component
