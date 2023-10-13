import { paint, repaint } from '@standard/h'
import component from '@app/deck/stats/stat'
import payload from './payload'
import request from '@standard/request'
import response from '@standard/response'
import storage from '@app/deck/stats/storage'
import translate from './translate'

@paint(component)
@storage.pull
class Learn {
  #value

  get label () {
    return translate.label
  }

  get value () {
    return String(this.#value ??= 0)
  }

  [request.Get] () {
    return payload.create()
  }

  @repaint
  [response.Ok] (count) {
    this.#value = count
    return this
  }
}

export default Learn
