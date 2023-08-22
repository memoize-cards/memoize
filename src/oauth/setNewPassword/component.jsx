import Footer from './footer'
import Form from '@elements/form'
import h from '@standard/h'
import Header from './header'
import Main from '@elements/main'
import Password from '@components/password'
import ResetPassword from './resetPassword'

function component (auth) {
  return (
    <Main tall>
      <Header />
      <Form onSubmit={(e) => auth.setNewPassword(e)}>
        <Password value={auth.password} supporting />
        <ResetPassword />
      </Form>
      <Footer />
    </Main>
  )
}

export default component
