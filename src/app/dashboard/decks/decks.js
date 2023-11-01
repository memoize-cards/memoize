import { paint, repaint } from '@standard/h'
import Deck from './deck'
import component from './component'
import redirectTo from './redirectTo'
import response from '@standard/response'
import storage from './storage'

@paint(component)
@storage.pull
class Decks {
  #collection

  get collection () {
    return (this.#collection ??= [])
  }

  [response.Error] (_error) {
    redirectTo.withoutDeck()
    return this
  }

  @repaint
  [response.Ok] (data) {
    this.#collection = data.map(Deck.create)
    return this
  }
}

export default Decks
