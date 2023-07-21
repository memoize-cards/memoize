/**
 * @enum {category}
 * @readonly
 * @memberof module:@components/carousel/category
 * @property {category} KeepWatching - Represents the "keep_watching" category for the carousel.
 * @property {category} MoreView - Represents the "more_view" category for the carousel.
 * @property {category} Professor - Represents the "professors" category for the carousel.
 */
const category = {
  /**
   * Represents the "keep_watching" category for the carousel.
   * @type {category}
   */
  KeepWatching: 'keep_watching',

  /**
   * Represents the "more_viewed" category for the carousel.
   * @type {category}
   */
  MoreView: 'most_viewed',

  /**
   * Represents the "trending" category for the carousel.
   * @type {category}
   */
  Trending: 'trending',

  /**
   * Represents the "professors" category for the carousel.
   * @type {category}
   */
  Professor: 'professors'
}

export default category
