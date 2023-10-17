import './style'
import define from '@standard/define'

@define('m-markdown')
class Markdown extends HTMLElement {
  connectedCallback () {
    const converter = new window.showdown.Converter()
    this.innerHTML = converter.makeHtml(this.querySelector('template').textContent)
    window.hljs.highlightAll()
    return this
  }
}

export default Markdown
