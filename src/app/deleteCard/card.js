import { paint } from '@standard/h'
import { urlFor } from '@standard/router'
import component from './component'
import Deck from './deck'
import oauth from '@app/oauth'
import result from '@standard/result'
import storage from './storage'

@paint(component)
@oauth.required
@storage.push
class Card {
  [result.Ok] () {
    location.assign(urlFor('deck', { id: Deck.id }))
    return this
  }
}

export default Card
