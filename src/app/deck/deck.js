import { paint } from '@standard/h'
import component from './component'
import global from './global'
import oauth from '@app/oauth'
import payload from './payload'
import request from '@standard/request'
import result from '@standard/result'
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
  [result.Ok] (data) {
    Object.assign(this.#data, data)
    return this
  }
}

export default Deck
