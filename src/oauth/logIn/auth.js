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

  get email () {
    return (this.#email ??= '')
  }

  get password () {
    return (this.#password ??= '')
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
    location.assign(urlFor('dashboard'))
    return this
  }

  @repaint
  [user.onInvalid] () {
    this.#password = ''
    return this
  }
}

export default Auth
