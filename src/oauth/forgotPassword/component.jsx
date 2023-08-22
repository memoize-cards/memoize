import Email from '@components/email'
import Footer from './footer'
import Form from '@elements/form'
import h from '@standard/h'
import Header from './header'
import Main from '@elements/main'
import ResetPassword from './resetPassword'

function component (auth) {
  return (
    <Main tall>
      <Header />
      <Form onSubmit={(e) => auth.forgotPassword(e)}>
        <Email />
        <ResetPassword />
      </Form>
      <Footer />
    </Main>
  )
}

export default component
