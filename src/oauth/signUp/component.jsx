import Email from '@components/email'
import Footer from './footer'
import Form from '@elements/form'
import GetStarted from './getStarted'
import h from '@standard/h'
import Header from './header'
import Main from './main'
import Name from '@components/name'
import Password from '@components/password'

function component (auth) {
  return (
    <Main>
      <Header />
      <Form onSubmit={(e) => auth.signUp(e)}>
        <Name value={auth.name} />
        <Email value={auth.email} />
        <Password value={auth.password} />
        <GetStarted />
      </Form>
      <Footer/ >
    </Main>
  )
}

export default component
