import * as filter from '@standard/filter'
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

  [response.Error] (_error) {
    return this
  }

  [response.Ok] (data) {
    redirectTo.deck(data.id)
    return this
  }
}

export default Deck
