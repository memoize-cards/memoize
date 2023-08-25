import { paint, repaint } from '@standard/h'
import Deck from './deck'
import component from './component'
import result from '@standard/result'
import storage from './storage'

@paint(component)
@storage
class Decks {
  #collection

  get collection () {
    return (this.#collection ??= [])
  }

  @repaint
  [result.Ok] (data) {
    this.#collection = data.map(Deck.create)
    return this
  }
}

export default Decks
