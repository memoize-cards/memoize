import { urlFor } from '@standard/router'
import Footer from './footer'
import Form from '@elements/form'
import h from '@standard/h'
import Header from './header'
import Main from './main'
import Password from '@components/password'
import PasswordConfirm from '@components/passwordConfirm'
import ResetPassword from './resetPassword'

function component () {
  return (
    <Main>
      <Header />
      <Form action={urlFor('passwordReset')}>
        <Password supporting />
        <PasswordConfirm />
        <ResetPassword />
      </Form>
      <Footer />
    </Main>
  )
}

export default component
