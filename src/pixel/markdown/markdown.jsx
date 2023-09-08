import define from '@standard/define'
import showdown from '@artifact/showdown'

@define('m-markdown')
class Markdown extends HTMLElement {
  #observer = new MutationObserver(() => this.#render())

  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.#observer.observe(this, { childList: true })
    return this
  }

  disconnectedCallback () {
    this.#observer.disconnect()
    return this
  }

  #render () {
    this.shadowRoot.innerHTML = showdown.makeHtml(this.innerHTML)
    return this
  }
}

export default Markdown
