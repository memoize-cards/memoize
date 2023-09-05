import Back from './back'
import Feedback from './feedback'
import Flip from './flip'
import Footer from './footer'
import Front from './front'
import h from '@standard/h'
import Master from '@app/master'
import redirectTo from './redirectTo'
import Reveal from './reveal'
import Type from './type'

function component (card) {
  return (
    <Master onBack={() => redirectTo.back()}>
      <Flip>
        <Flip.Front>
          <Type>{card.type}</Type>
          <Front />
          <Reveal />
        </Flip.Front>
        <Flip.Back>
          <Type>{card.type}</Type>
          <Front />
          <Back />
          <Feedback />
        </Flip.Back>
      </Flip>
      <Footer />
    </Master>
  )
}

export default component
