import * as filter from '@standard/filter'
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
class Deck {
  #data = {}

  get description () {
    return (this.#data.description ??= '')
  }

  get name () {
    return (this.#data.name ??= '')
  }

  @filter.prevent
  @filter.formData
  @storage.push
  create (data) {
    Object.assign(this.#data, data)
    return this
  }

  async [request.Post] () {
    return await payload.create(this.#data)
  }

  [result.Error] (_error) {
    return this
  }

  [result.Ok] (data) {
    redirectTo.deck(data.id)
    return this
  }
}

export default Deck
