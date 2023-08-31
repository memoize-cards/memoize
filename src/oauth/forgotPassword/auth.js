import * as filter from '@standard/filter'
import { paint, repaint } from '@standard/h'
import { urlFor } from '@standard/router'
import component from './component'
import result from '@standard/result'
import storage from './storage'

@paint(component)
class Auth {
  #email

  get email () {
    return (this.#email ??= '')
  }

  @filter.prevent
  @filter.formData
  @storage.push
  forgotPassword (data) {
    this.#email = data.email
    return this
  }

  @repaint
  [result.Error] (_error) {
    this.#email = ''
    return this
  }

  [result.Ok] (_data) {
    location.assign(`${urlFor('checkYourEmail')}?email=${this.email}`)
    return this
  }
}

export default Auth
