import * as filter from '@standard/filter'
import { paint } from '@standard/h'
import { urlFor } from '@standard/router'
import component from './component'
import Deck from './deck'

@paint(component)
class Card {
  @filter.prevent
  continue () {
    location.assign(urlFor('deck', { id: Deck.id }))
    return this
  }
}

export default Card
