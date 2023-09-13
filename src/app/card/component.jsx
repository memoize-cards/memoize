import Back from './back'
import Flip from './flip'
import Front from './front'
import h, { Fragment } from '@standard/h'
import Header from './header'

function component () {
  return (
    <>
      <Header />
      <Flip>
        <Front />
        <Back />
      </Flip>
    </>
  )
}

export default component
