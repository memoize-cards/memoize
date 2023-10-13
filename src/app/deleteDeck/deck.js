import { paint } from '@standard/h'
import component from './component'
import oauth from '@app/oauth'
import payload from './payload'
import redirectTo from './redirectTo'
import request from '@standard/request'
import response from '@standard/response'
import storage from './storage'

@paint(component)
@oauth.required
@storage.push
class Deck {
  [request.Delete] () {
    return payload.create()
  }

  [response.Ok] () {
    redirectTo.dashboard()
    return this
  }
}

export default Deck
