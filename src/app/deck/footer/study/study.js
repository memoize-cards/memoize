import { paint, repaint } from '@standard/h'
import component from './component'
import result from '@standard/result'
import storage from './storage'

@paint(component)
@storage.pull
class Study {
  #count

  get count () {
    return (this.#count ??= '0')
  }

  @repaint
  [result.Ok] (count) {
    console.log(count)
    this.#count = count
  }
}

export default Study
