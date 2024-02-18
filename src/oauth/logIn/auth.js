import * as filter from '@standard/filter'
import { paint, repaint } from '@standard/h'
import component from './component'
import redirectTo from './redirectTo'
import user from './user'

@paint(component)
class Auth {
  #data = {}

  get email () {
    return (this.#data.email ??= '')
  }

  get password () {
    return (this.#data.password ??= '')
  }

  @filter.prevent
  @filter.formData
  @user.authenticate
  logIn (data) {
    Object.assign(this.#data, data)
    return this
  }

  [user.authenticated] (_data) {
    redirectTo.dashboard()
    return this
  }

  @repaint
  [user.invalid] (_error) {
    this.#data.password = ''
    return this
  }
}

export default Auth
