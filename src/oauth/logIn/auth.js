import * as filter from '@standard/filter'
import { paint, repaint } from '@standard/h'
import component from './component'
import redirectTo from './redirectTo'
import response from '@standard/response'
import storage from './storage'

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
  @storage.push
  logIn (data) {
    Object.assign(this.#data, data)
    return this
  }

  @repaint
  [response.Error] (_error) {
    this.#data.password = ''
    return this
  }

  [response.Ok] (_data) {
    redirectTo.dashboard()
    return this
  }
}

export default Auth
