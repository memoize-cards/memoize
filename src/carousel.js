import { paint, repaint } from '@standard/h'
import category from './category'
import component from './component'
import result from '@standard/result'
import storage from './storage'
import type from './type'
import Video from './video'

@paint(component)
@storage
class Carousel {
  #cards
  #category
  #type

  get cards () {
    return (this.#cards ?? [])
  }

  get category () {
    return (this.#category ?? category.MoreView)
  }

  get type () {
    return (this.#type ?? type.Video)
  }

  constructor (props) {
    this.#category = props.category
    this.#type = props.type
  }

  @repaint
  [result.Ok] (cards) {
    this.#cards = cards.map(Video.create)
    return this
  }
}

export default Carousel
