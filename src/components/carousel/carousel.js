import * as f from '@standard/f'
import { paint, repaint } from '@standard/h'
import category from './category'
import component from './component'
import result from '@standard/result'
import storage from './storage'
import type from './type'
import Video from './video'

/**
 * @classdesc Represents a carousel component that displays videos in a slider.
 * @class
 * @memberof module:@components/carousel
 * @extends component
 * @mixes storage
 */
@paint(component)
@storage
class Carousel {
  #cards
  #category
  #id
  #type

  /**
   * Get the unique ID of the carousel channel.
   *
   * @member {string}
   * @memberof module:@components/carousel
   * @readonly
   */
  get channel () {
    return (this.#id ??= f.guid())
  }

  /**
   * Get the cards displayed in the carousel.
   *
   * @member {Video[]}
   * @memberof module:@components/carousel
   * @readonly
   */
  get cards () {
    return (this.#cards ?? [])
  }

  /**
   * Get the category of the carousel.
   *
   * @member {category}
   * @memberof module:@components/carousel
   * @readonly
   */
  get category () {
    return (this.#category ?? category.Trending)
  }

  /**
   * Get the type of the carousel.
   *
   * @member {type}
   * @memberof module:@components/carousel
   * @readonly
   */
  get type () {
    return (this.#type ?? type.Video)
  }

  /**
   * Create a new Carousel component.
   *
   * @constructor
   * @memberof module:@components/carousel/Carousel
   * @param {Object} props - The properties to initialize the carousel.
   * @param {category} props.category - The category of the carousel.
   * @param {type} props.type - The type of the carousel.
   */
  constructor (props) {
    this.#category = props.category
    this.#type = props.type
  }

  /**
   * Repaint the carousel with new cards.
   *
   * @method
   * @memberof module:@components/carousel
   * @param {Video[]} cards - An array of videos to be displayed in the carousel.
   * @returns {Carousel} - The updated Carousel instance.
   */
  @repaint
  [result.Ok] (cards) {
    this.#cards = cards.map(Video.create)
    return this
  }
}

export default Carousel
