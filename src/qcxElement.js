import define from '@standard/define'
import h, { Fragment, render } from '@standard/h'
import Metro from './metro'
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
        <section>
          <Metro>
            QCX Carousel
          </Metro>
        </section>
      </>
    )
    return this
  }
}

export default QCXElement
