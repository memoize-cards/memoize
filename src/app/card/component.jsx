import Again from './again'
import Choose from '@directive/choose'
import Easy from './easy'
import Edit from './edit'
import Footer from './footer'
import Good from './good'
import h from '@standard/h'
import Hard from './hard'
import Master from '@app/master'
import position from './position'
import Reveal from './reveal'
import stack from '@elements/stack'
import text from '@elements/text'

function component (card) {
  return (
    <Master>
      <Choose when={card.position}>
        <stack.Div equal={position.FRONT} column>
          <text.Span master dark highlight md bold>{card.front}</text.Span>
          <Reveal onClick={() => card.reveal()} />
        </stack.Div>
        <stack.Div equal={position.BACK} column>
          <text.Span master dark highlight md bold>{card.front}</text.Span>
          <text.Span master dark xxs>{card.back}</text.Span>
          <text.Span master dark highlight xs bold>Did you remember the answer?</text.Span>
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
