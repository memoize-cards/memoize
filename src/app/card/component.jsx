import Back from './back'
import Feedback from './feedback'
import Flip from './flip'
import Footer from './footer'
import Front from './front'
import h from '@standard/h'
import Master from '@app/master'
import redirectTo from './redirectTo'
import Reveal from './reveal'

function component () {
  return (
    <Master onBack={() => redirectTo.back()}>
      <Flip>
        <Front />
        <Back />
        <Reveal />
        <Feedback />
      </Flip>
      <Footer />
    </Master>
  )
}

export default component
