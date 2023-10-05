import { paint } from '@standard/h'
import component from './component'
import prompt from './prompt'
import result from '@standard/result'

@paint(component)
@prompt
class Install {
  #e

  onClick () {
    this.#e?.prompt()
    return this
  }

  [result.Ok] (e) {
    this.#e = e
    return this
  }
}

export default Install
