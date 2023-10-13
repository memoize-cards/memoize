import { paint, repaint } from '@standard/h'
import Deck from './deck'
import component from './component'
import response from '@standard/response'
import storage from './storage'

@paint(component)
@storage.pull
class Decks {
  #collection

  get collection () {
    return (this.#collection ??= [])
  }

  @repaint
  [response.Ok] (data) {
    this.#collection = data.map(Deck.create)
    return this
  }
}

export default Decks
