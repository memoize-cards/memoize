import './style'
import define from '@standard/define'
import highlight from '@artifact/highlight'
import showdown from '@artifact/showdown'

@define('m-markdown')
class Markdown extends HTMLElement {
  connectedCallback () {
    this.innerHTML = showdown.makeHtml(this.querySelector('template').textContent)
    highlight.highlightAll()
    return this
  }
}

export default Markdown
