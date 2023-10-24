import * as filter from '@standard/filter'
import { paint } from '@standard/h'
import component from './component'
import redirectTo from './redirectTo'
import response from '@standard/response'
import storage from './storage'

@paint(component)
class Auth {
  #data = {}

  get password () {
    return (this.#data.password ??= '')
  }

  @filter.prevent
  @filter.formData
  @storage.push
  setNewPassword (data) {
    Object.assign(this.#data, data)
    return this
  }

  [response.Ok] (_data) {
    redirectTo.passwordReset()
    return this
  }
}

export default Auth
