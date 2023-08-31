import * as filter from '@standard/filter'
import { paint } from '@standard/h'
import { urlFor } from '@standard/router'
import component from './component'
import result from '@standard/result'
import storage from './storage'

@paint(component)
class Auth {
  #password

  get password () {
    return (this.#password ??= '')
  }

  @filter.prevent
  @filter.formData
  @storage.push
  setNewPassword (data) {
    this.#password = data.password
    return this
  }

  [result.Error] (_error) {
    return this
  }

  [result.Ok] (_data) {
    location.assign(urlFor('passwordReset'))
    return this
  }
}

export default Auth
