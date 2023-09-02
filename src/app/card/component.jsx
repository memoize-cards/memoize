import Again from './again'
import Back from './back'
import Choose from '@directive/choose'
import Easy from './easy'
import Edit from './edit'
import Feedback from './feedback'
import Footer from './footer'
import Front from './front'
import Good from './good'
import h from '@standard/h'
import Hard from './hard'
import Master from '@app/master'
import position from './position'
import Reveal from './reveal'
import stack from '@elements/stack'
import Type from './type'

function component (card) {
  return (
    <Master>
      <Choose when={card.position}>
        <stack.Div equal={position.FRONT} column>
          <Type>{card.type}</Type>
          <Front>{card.front}</Front>
          <Reveal onClick={() => card.reveal()} />
        </stack.Div>
        <stack.Div equal={position.BACK} column>
          <Type>{card.type}</Type>
          <Front>{card.front}</Front>
          <Back>{card.back}</Back>
          <Feedback />
          <Easy onClick={() => card.easy()} />
          <Good onClick={() => card.good()} />
          <Hard onClick={() => card.hard()} />
          <Again onClick={() => card.again()} />
        </stack.Div>
      </Choose>
      <Footer>
        <Edit onClick={() => card.edit()} />
      </Footer>
    </Master>
  )
}

export default component
