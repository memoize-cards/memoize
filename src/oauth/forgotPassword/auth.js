import * as filter from '@standard/filter'
import { paint, repaint } from '@standard/h'
import { urlFor } from '@standard/router'
import component from './component'
import user from './user'

@paint(component)
class Auth {
  #email

  get email () {
    return (this.#email ??= '')
  }

  @filter.prevent
  @filter.formData
  @user.resetPassword
  forgotPassword (data) {
    this.#email = data.email
    return this
  }

  @repaint
  [user.onError] (_error) {
    this.#email = ''
    return this
  }

  [user.onPasswordReset] (_data) {
    location.assign(`${urlFor('checkYourEmail')}?email=${this.email}`)
    return this
  }
}

export default Auth
