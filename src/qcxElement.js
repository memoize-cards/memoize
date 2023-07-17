import define from '@standard/define'
import h, { render } from '@standard/h'

@define('qcx-carousel')
class QCXElement extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    render(this.shadowRoot, <strong>QCX Carousel</strong>)
    return this
  }
}

export default QCXElement
