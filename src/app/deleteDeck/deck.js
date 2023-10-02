import { paint } from '@standard/h'
import { urlFor } from '@standard/router'
import component from './component'
import oauth from '@app/oauth'
import result from '@standard/result'
import storage from './storage'

@paint(component)
@oauth.required
@storage.push
class Deck {
  [result.Ok] () {
    location.assign(urlFor('dashboard'))
    return this
  }
}

export default Deck
