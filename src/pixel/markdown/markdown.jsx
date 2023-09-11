import define from '@standard/define'
import showdown from '@artifact/showdown'

@define('m-markdown')
class Markdown extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.shadowRoot.innerHTML = showdown.makeHtml(this.innerHTML)
    return this
  }
}

export default Markdown
