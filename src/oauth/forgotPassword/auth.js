import * as filter from '@standard/filter'
import { paint, repaint } from '@standard/h'
import component from './component'
import redirectTo from './redirectTo'
import response from '@standard/response'
import storage from './storage'

@paint(component)
class Auth {
  #data = {}

  get email () {
    return (this.#data.email ??= '')
  }

  @filter.prevent
  @filter.formData
  @storage.push
  forgotPassword (data) {
    Object.assign(this.#data, data)
    return this
  }

  @repaint
  [response.Error] (_error) {
    this.#data.email = ''
    return this
  }

  [response.Ok] (_data) {
    redirectTo.checkYourEmail(this.email)
    return this
  }
}

export default Auth
