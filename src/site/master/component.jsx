import BackToHome from './backToHome'
import h, { Fragment } from '@standard/h'
import Header from './header'
import Main from './main'

function component (_props, children) {
  return (
    <>
      <Header>
        <BackToHome />
      </Header>
      <Main>
        {children}
      </Main>
    </>
  )
}

export default component
