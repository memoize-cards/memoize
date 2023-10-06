import * as filter from '@standard/filter'
import { paint, repaint } from '@standard/h'
import { urlFor } from '@standard/router'
import component from './component'
import result from '@standard/result'
import storage from './storage'

@paint(component)
class Auth {
  #email
  #password

  get email () {
    return (this.#email ??= '')
  }

  get password () {
    return (this.#password ??= '')
  }

  @filter.prevent
  @filter.formData
  @storage.push
  logIn (data) {
    this.#email = data.email
    this.#password = data.password
    return this
  }

  @repaint
  [result.Error] () {
    this.#password = ''
    return this
  }

  [result.Ok] (_data) {
    location.assign(urlFor('dashboard'))
    return this
  }
}

export default Auth
