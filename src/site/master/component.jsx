import Footer from './footer'
import h, { Fragment } from '@standard/h'
import Header from './header'
import Main from './main'

function component (_props, children) {
  return (
    <>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  )
}

export default component
