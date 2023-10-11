import { position } from '@app/card/flip'
import Footer from './footer'
import h, { Fragment } from '@standard/h'
import Header from './header'
import Main from './main'

function component () {
  return (
    <Fragment slot={position.BACK}>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  )
}

export default component
