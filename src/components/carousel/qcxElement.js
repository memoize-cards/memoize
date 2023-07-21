import { Style } from '@standard/css'
import Carousel from './carousel'
import define from '@standard/define'
import h, { Fragment, render } from '@standard/h'

/**
 * Custom web component representing a QCX Carousel.
 *
 * @class QCXElement
 * @memberof module:@components/qcx-carousel
 * @extends HTMLElement
 */
@define('qcx-carousel')
class QCXElement extends HTMLElement {
  #props = {}

  /**
   * Get the list of attributes to observe for changes.
   *
   * @static
   * @member {string[]}
   * @memberof module:@components/qcx-carousel.QCXElement
   * @readonly
   */
  static get observedAttributes () {
    return [
      'category',
      'type'
    ]
  }

  /**
   * Create a new instance of QCXElement.
   *
   * @constructor
   * @memberof module:@components/qcx-carousel.QCXElement
   */
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
  }

  /**
   * Callback for when observed attributes change.
   *
   * @method
   * @memberof module:@components/qcx-carousel.QCXElement
   * @param {string} key - The name of the changed attribute.
   * @param {string} oldValue - The previous value of the attribute.
   * @param {string} value - The new value of the attribute.
   * @returns {QCXElement} - The updated QCXElement instance.
   */
  attributeChangedCallback (key, _, value) {
    Reflect.set(this.#props, key, value)
    return this
  }

  /**
   * Callback for when the element is added to the DOM.
   *
   * @method
   * @memberof module:@components/qcx-carousel.QCXElement
   * @returns {QCXElement} - The QCXElement instance.
   */
  connectedCallback () {
    render(
      this.shadowRoot,
      <>
        <Style />
        <Carousel { ...this.#props } />
      </>
    )
    return this
  }
}

export default QCXElement
