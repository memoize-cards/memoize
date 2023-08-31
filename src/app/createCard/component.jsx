import h from '@standard/h'
import Master from '@app/master'

function component (card) {
  return (
    <Master>
      {card.front}
      {card.back}
      <button onClick={() => card.create()}>Create</button>
    </Master>
  )
}

export default component
