import { paint, repaint } from '@standard/h'
import component from './component'
import payload from './payload'
import request from '@standard/request'
import response from '@standard/response'
import storage from './storage'

@paint(component)
@storage.pull
class Study {
  #count

  get count () {
    return (this.#count ??= 0)
  }

  [request.Get] () {
    return payload.create()
  }

  @repaint
  [response.Ok] (count) {
    this.#count = count
  }
}

export default Study
