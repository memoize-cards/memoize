import Children from './children'
import didMount from './didMount'
import didUpdate from './didUpdate'
import didUnmount from './didUnmount'
import Key from './key'
import overload from '@standard/overload'
import paint from './paint'
import reflow from './reflow'
import render from './render'
import repaint from './repaint'
import revoke from '@standard/revoke'
import Slot from './slot'
import willMount from './willMount'
import willUpdate from './willUpdate'
import willUnmount from './willUnmount'

@revoke
class Fragment {
  #children
  #key
  #node
  #slot

  get children () {
    return this.#children
  }

  get key () {
    return this.#key.value
  }

  get slot () {
    return this.#slot.value
  }

  constructor (attrs, children) {
    this.#children = Children.create(children, this)
    this.#key = Key.create(attrs)
    this.#slot = Slot.create(attrs)
  }

  @overload(
    'appendChild'
  )
  after (child) {
    const lastChild = Array.from(this.#children).pop()
    lastChild.after(child)
    return this
  }

  append (children) {
    children = children.map((child) => child[render.flow]())
    this.#node.append(...children)
    return this
  }

  @didUnmount
  @willUnmount
  remove () {
    const children = Array.from(this.#children)
    children.forEach((child) => child.remove())
    return this
  }

  replace (child, nChild) {
    child.after(nChild)
    child.remove()
    return this
  }

  [reflow.different] (nFragment) {
    return (
      this[paint.instance]?.() !== nFragment[paint.instance]?.()
    )
  }

  [reflow.same] (nFragment) {
    return (
      (this.key && this.key === nFragment.key) ||
      (this[paint.instance]?.() && this[paint.instance]?.() === nFragment[paint.instance]?.())
    )
  }

  @didMount
  @willMount
  [render.flow] () {
    this.#node ??= document.createDocumentFragment()
    this.children[render.flow]()
    return this.#node
  }

  @didUpdate
  @willUpdate
  [repaint.reflow] (fragment) {
    this.children[repaint.reflow](fragment.children)
    return this
  }

  static execute (attrs, children) {
    attrs = Object.entries(attrs)
    return new Fragment(attrs, children)
  }
}

export default Fragment.execute
