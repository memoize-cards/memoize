import { paint } from '@standard/h'
import Card from './card'

/**
 * @classdesc Represents a Video item with its properties.
 * @class
 * @memberof module:@components/carousel/Video
 * @param {string} id - The unique identifier of the video.
 * @param {string} avatar - The URL of the video's avatar.
 * @param {string} discipline - The name of the video's discipline.
 * @param {string} professor - The name of the video's professor.
 */
@paint(Card)
class Video {
  #avatar
  #discipline
  #id
  #professor

  /**
   * Get the URL of the video's avatar.
   *
   * @member {string}
   * @memberof module:@components/carousel/Video#
   * @readonly
   */
  get avatar () {
    return this.#avatar
  }

  /**
   * Get the name of the video's discipline.
   *
   * @member {string}
   * @memberof module:@components/carousel/Video#
   * @readonly
   */
  get discipline () {
    return this.#discipline
  }

  /**
   * Get the name of the video's professor.
   *
   * @member {string}
   * @memberof module:@components/carousel/Video#
   * @readonly
   */
  get professor () {
    return this.#professor
  }

  /**
   * Create a new Video instance.
   *
   * @constructor
   * @memberof module:@components/carousel/Video
   * @param {string} id - The unique identifier of the video.
   * @param {string} avatar - The URL of the video's avatar.
   * @param {string} discipline - The name of the video's discipline.
   * @param {string} professor - The name of the video's professor.
   */
  constructor (id, avatar, discipline, professor) {
    this.#id = id
    this.#avatar = avatar
    this.#discipline = discipline
    this.#professor = professor
  }

  /**
   * Redirect to the video link.
   *
   * @method
   * @memberof module:@components/carousel/Video#
   * @returns {Video} The current Video instance.
   */
  redirect () {
    location.assign(`/b/explore-aulas/${this.#id}`)
    return this
  }

  /**
   * Create a new Video instance from the provided data object.
   *
   * @static
   * @method
   * @memberof module:@components/carousel/Video
   * @param {VideoData} data - The data object representing video information.
   * @returns {Video} A new Video instance.
   */
  static create (data) {
    return new Video(
      data.id,
      data.avatar_url,
      data.name,
      data.professor_name
    )
  }
}

export default Video
