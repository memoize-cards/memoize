import { paint, repaint } from '@standard/h'
import component from './component'
import result from '@standard/result'
import storage from './storage'
import Video from './video'

@paint(component)
@storage
class Carousel {
  #cards

  get cards () {
    return (this.#cards ?? [])
  }

  @repaint
  [result.Ok] (cards) {
    this.#cards = cards.map(Video.create)
    return this
  }
}

export default Carousel
