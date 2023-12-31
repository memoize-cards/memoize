import { paint } from '@standard/h'
import component from './component'
import global from './global'
import oauth from '@app/oauth'
import payload from './payload'
import request from '@standard/request'
import response from '@standard/response'
import storage from './storage'

@paint(component)
@oauth.required
@storage.pull
class Deck {
  #data = {}

  get description () {
    return (this.#data.description ??= '')
  }

  get id () {
    return (this.#data.id ??= '')
  }

  get name () {
    return (this.#data.name ??= '')
  }

  [request.Get] () {
    return payload.create()
  }

  @global
  [response.Ok] (data) {
    Object.assign(this.#data, data)
    return this
  }
}

export default Deck
