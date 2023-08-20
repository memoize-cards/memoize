import * as filter from '@standard/filter'
import { paint } from '@standard/h'
import { urlFor } from '@standard/router'
import component from './component'
import cookie from './cookie'
import user from './user'

@paint(component)
class Auth {
  #password

  get password () {
    return (this.#password ??= '')
  }

  @filter.prevent
  @filter.formData
  @user.setNewPassword
  setNewPassword (data) {
    this.#password = data.password
    return this
  }

  [user.onError] (_error) {
    return this
  }

  @cookie.setUser
  [user.onPasswordReset] (_data) {
    location.assign(urlFor('passwordReset'))
    return this
  }
}

export default Auth
