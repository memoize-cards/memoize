import { position } from '@app/card/flip'
import Footer from './footer'
import h, { Fragment } from '@standard/h'
import Main from './main'

function component () {
  return (
    <Fragment slot={position.FRONT}>
      <Main />
      <Footer />
    </Fragment>
  )
}

export default component
