import Back from './back'
import Choose from '@directive/choose'
import Feedback from './feedback'
import Footer from './footer'
import Front from './front'
import h from '@standard/h'
import Master from '@app/master'
import position from './position'
import redirectTo from './redirectTo'
import Reveal from './reveal'
import stack from '@elements/stack'
import Type from './type'

function component (card) {
  return (
    <Master onBack={() => redirectTo.back()}>
      <Choose when={card.position}>
        <stack.Div equal={position.FRONT} column>
          <Type>{card.type}</Type>
          <Front>{card.front}</Front>
          <Reveal />
        </stack.Div>
        <stack.Div equal={position.BACK} column>
          <Type>{card.type}</Type>
          <Front>{card.front}</Front>
          <Back>{card.back}</Back>
        </stack.Div>
        <Feedback equal={position.BACK} />
      </Choose>
      <Footer />
    </Master>
  )
}

export default component
