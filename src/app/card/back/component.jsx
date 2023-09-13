import { position } from '@app/card/flip'
import Footer from './footer'
import h, { Fragment } from '@standard/h'
import Main from './main'

function component () {
  return (
    <Fragment slot={position.BACK}>
      <Main />
      <Footer />
    </Fragment>
  )
}

export default component
