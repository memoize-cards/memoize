import Carousel from './carousel'
import define from '@standard/define'
import h, { Fragment, render } from '@standard/h'
import { Style } from '@standard/css'

@define('qcx-carousel')
class QCXElement extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    render(
      this.shadowRoot,
      <>
        <Style />
        <Carousel />
      </>
    )
    return this
  }
}

export default QCXElement
