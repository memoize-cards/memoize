import Description from './description'
import Email from '@elements/email'
import Footer from './footer'
import ForgotPassword from './forgotPassword'
import Form from '@elements/form'
import h from '@standard/h'
import Header from './header'
import HGroup from '@elements/hgroup'
import Logo from '@elements/logo'
import Main from './main'
import Password from '@elements/password'
import SignIn from './signIn'
import SignUp from './signUp'
import Title from './title'

function component (auth) {
  return (
    <Main>
      <Header>
        <Logo />
        <HGroup>
          <Title />
          <Description />
        </HGroup>
      </Header>
      <section>
        <Form onSubmit={(e) => auth.logIn(e)}>
          <Email value={auth.email} />
          <Password value={auth.password} />
          <ForgotPassword />
          <SignIn />
        </Form>
      </section>
      <Footer>
        <SignUp />
      </Footer>
    </Main>
  )
}

export default component
