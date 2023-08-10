import * as filter from '@standard/filter'
import { paint, repaint } from '@standard/h'
import { urlFor } from '@standard/router'
import cookie from './cookie'
import component from './component'
import user from './user'

@paint(component)
class Auth {
  #email
  #password
  #state

  get email () {
    return (this.#email ??= '')
  }

  get password () {
    return (this.#password ??= '')
  }

  get state () {
    return (this.#state ??= '')
  }

  @filter.prevent
  @filter.formData
  @user.authenticate
  logIn (data) {
    this.#email = data.email
    this.#password = data.password
    return this
  }

  @cookie.setUser
  [user.onAuthenticated] (_user) {
    location.assign(urlFor('home'))
    return this
  }

  @repaint
  [user.onInvalid] () {
    this.#password = ''
    this.#state = 'invalid'
    return this
  }
}

export default Auth
