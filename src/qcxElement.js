import { Style } from '@standard/css'
import Carousel from './carousel'
import define from '@standard/define'
import h, { Fragment, render } from '@standard/h'

@define('qcx-carousel')
class QCXElement extends HTMLElement {
  #props = {}

  static get observedAttributes () {
    return [
      'category',
      'type'
    ]
  }

  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
  }

  attributeChangedCallback (key, value) {
    Reflect.set(this.#props, key, value)
    return this
  }

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
