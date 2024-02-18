import './style'
import define from '@standard/define'

@define('m-markdown')
class Markdown extends HTMLElement {
  connectedCallback () {
    this.innerHTML = new window.showdown.Converter().makeHtml(this.querySelector('template').textContent)
    window.hljs.highlightAll()
    return this
  }
}

export default Markdown
