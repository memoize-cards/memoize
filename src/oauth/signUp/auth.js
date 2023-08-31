import * as filter from '@standard/filter'
import { paint, repaint } from '@standard/h'
import { urlFor } from '@standard/router'
import component from './component'
import cookie from './cookie'
import result from '@standard/result'
import storage from './storage'

@paint(component)
class Auth {
  #email
  #name
  #password

  get email () {
    return (this.#email ??= '')
  }

  get name () {
    return (this.#name ??= '')
  }

  get password () {
    return (this.#password ??= '')
  }

  @filter.prevent
  @filter.formData
  @storage.push
  signUp (data) {
    this.#email = data.email
    this.#name = data.name
    this.#password = data.password
    return this
  }

  @repaint
  [result.Error] (_error) {
    this.#password = ''
    return this
  }

  @cookie.setUser
  [result.Ok] (_storage) {
    location.assign(urlFor('dashboard'))
    return this
  }
}

export default Auth
