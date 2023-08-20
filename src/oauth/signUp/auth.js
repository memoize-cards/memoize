import * as filter from '@standard/filter'
import { paint, repaint } from '@standard/h'
import { urlFor } from '@standard/router'
import component from './component'
import cookie from './cookie'
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

  @cookie.setUser
  [user.onCreated] (_user) {
    location.assign(urlFor('dashboard'))
    return this
  }

  @repaint
  [user.onInvalid] (_error) {
    this.#password = ''
    return this
  }
}

export default Auth
