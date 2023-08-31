import { paint } from '@standard/h'
import { urlFor } from '@standard/router'
import component from './component'
import Deck from './deck'
import result from '@standard/result'
import storage from './storage'

@paint(component)
@storage.push
class Auth {
  [result.Ok] () {
    location.assign(urlFor('deck', { id: Deck.id }))
    return this
  }
}

export default Auth
