import { paint, repaint } from '@standard/h'
import component from './component'
import response from '@standard/response'
import status from './status'
import storage from './storage'

@paint(component)
@storage.pull
class GetStarted {
  #user

  get user () {
    return this.#user
  }

  @repaint
  [response.Error] () {
    this.#user = status.loggedOut
    return this
  }

  @repaint
  [response.Ok] (_user) {
    this.#user = status.logged
    return this
  }
}

export default GetStarted
