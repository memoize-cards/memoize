import Instance from './instance'
import magic from '@standard/magic'
import reflow from './reflow'
import render from './render'
import repaint from './repaint'
import Text from './text'

class Children {
  #childList
  #parent

  constructor (childList, parent) {
    this.#childList = childList
    this.#parent = parent
  }

  [reflow.add] (nChild) {
    this.#parent.appendChild(nChild)
    this.#childList.push(nChild)
    return this
  }

  [reflow.remove] (child) {
    const start = this.#childList.indexOf(child)
    this.#childList.splice(start, 1)
    child.remove()
    return this
  }

  [reflow.replace] (child, nChild) {
    const start = this.#childList.indexOf(child)
    this.#childList.splice(start, 1, nChild)
    this.#parent.replace(child, nChild)
    return this
  }

  [render.flow] () {
    this.#parent.append(this.#childList)
    return this
  }

  [repaint.reflow] (nChildren) {
    reflow(this, nChildren)
    return this
  }

  [magic.zip] () {
    return this.#childList
  }

  * [Symbol.iterator] () {
    yield * this.#childList
  }

  static create (childList, parent) {
    return new Children(childList, parent)
  }

  static evaluate (children) {
    children = children.flat(Infinity)
    children = children.filter(Boolean)
    children = Text.mapper(children)
    children = Instance.mapper(children)
    return children
  }
}

export default Children
