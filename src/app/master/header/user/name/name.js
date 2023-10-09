import { paint, repaint } from '@standard/h'
import component from './component'
import response from '@standard/response'
import storage from './storage'

@paint(component)
@storage.pull
class Name {
  #data = {}

  get name () {
    return this.#data.user_metadata?.name
  }

  @repaint
  [response.Ok] (data) {
    Object.assign(this.#data, data)
    return this
  }
}

export default Name
