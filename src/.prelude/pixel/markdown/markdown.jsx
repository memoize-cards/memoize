import './style'
import define from '@standard/define'
import showdown from '@artifact/showdown'

@define('m-markdown')
class Markdown extends HTMLElement {
  connectedCallback () {
    this.innerHTML = showdown.makeHtml(this.querySelector('template').textContent)
    hljs.highlightAll()
    return this
  }
}

export default Markdown
