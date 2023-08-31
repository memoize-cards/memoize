import { paint, repaint } from '@standard/h'
import { setGlobal } from '@standard/global'
import component from './component'
import result from '@standard/result'
import storage from './storage'

@paint(component)
@storage.pull
class Deck {
  @repaint
  [result.Ok] (data) {
    setGlobal(data)
    return this
  }
}

export default Deck
