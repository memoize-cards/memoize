import BackToDeck from '@app/backToDeck'
import Footer from './footer'
import h from '@standard/h'
import Main from './main'
import Master from '@app/master'

function component () {
  return (
    <Master>
      <BackToDeck />
      <Main />
      <Footer />
    </Master>
  )
}

export default component
