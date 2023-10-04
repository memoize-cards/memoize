import { paint } from '@standard/h'
import component from './component'
import oauth from '@app/oauth'
import payload from './payload'
import redirectTo from './redirectTo'
import request from '@standard/request'
import result from '@standard/result'
import storage from './storage'

@paint(component)
@oauth.required
@storage.push
class Card {
  [request.Delete] () {
    return payload.create()
  }

  [result.Ok] () {
    redirectTo.deck()
    return this
  }
}

export default Card
