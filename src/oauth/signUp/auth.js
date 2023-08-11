import * as filter from '@standard/filter'
import { paint, repaint } from '@standard/h'
import { urlFor } from '@standard/router'
import component from './component'
import user from './user'

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
  @user.create
  signUp (data) {
    this.#email = data.email
    this.#name = data.name
    this.#password = data.password
    return this
  }

  [user.onCreated] (_user) {
    location.assign(urlFor('login'))
    return this
  }

  @repaint
  [user.onInvalid] () {
    this.#password = ''
    return this
  }
}

export default Auth
