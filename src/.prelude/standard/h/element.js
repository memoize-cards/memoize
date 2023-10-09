import Attributes from './attributes'
import Children from './children'
import ClassName from './className'
import didMount from './didMount'
import didUpdate from './didUpdate'
import didUnmount from './didUnmount'
import Events from './events'
import Is from './is'
import Key from './key'
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
class Element {
  #attributes
  #children
  #className
  #events
  #is
  #key
  #node
  #nodeName
  #slot

  get attributes () {
    return this.#attributes
  }

  get children () {
    return this.#children
  }

  get className () {
    return this.#className
  }

  get events () {
    return this.#events
  }

  get is () {
    return this.#is.value
  }

  get key () {
    return this.#key.value
  }

  get nodeName () {
    return this.#nodeName
  }

  get slot () {
    return this.#slot.value
  }

  get __node__ () {
    return this.#node
  }

  constructor (nodeName, attrs, children) {
    this.#nodeName = nodeName
    this.#attributes = Attributes.create(attrs, this)
    this.#children = Children.create(children, this)
    this.#className = ClassName.create(attrs, this)
    this.#events = Events.create(attrs, this)
    this.#is = Is.create(attrs)
    this.#key = Key.create(attrs)
    this.#slot = Slot.create(attrs)
  }

  addEventListener (event) {
    const [key, value] = event
    this.#node?.[key] = value
    return this
  }

  after (child) {
    child = child[render.flow]()
    this.#node?.after(child)
    return this
  }

  append (children) {
    children = children.map((child) => child[render.flow]())
    this.#node.append(...children)
    return this
  }

  appendChild (child) {
    child = child[render.flow]()
    this.#node?.appendChild(child)
    return this
  }

  @didUnmount
  @willUnmount
  remove () {
    this.#node?.remove()
    return this
  }

  removeAttribute (attr) {
    this.#node?.removeAttribute(attr?.key)
    return this
  }

  removeEventListener (event) {
    delete this.#node?.[event.name]
    return this
  }

  replace (child, nChild) {
    child.after(nChild)
    child.remove()
    return this
  }

  setAttribute (attr) {
    this.#node?.setAttribute(...attr)
    return this
  }

  [reflow.different] (nElement) {
    return (
      (this.nodeName !== nElement.nodeName) ||
      (this.is !== nElement.is)
    )
  }

  [reflow.same] (nElement) {
    return (
      (this.key !== undefined && this.key === nElement.key) ||
      (this[paint.instance]?.() && this[paint.instance]?.() === nElement[paint.instance]?.())
    )
  }

  @didMount
  @willMount
  [render.flow] () {
    this.#node ??= document.createElement(this.nodeName, { is: this.is })
    this.events[render.flow]()
    this.attributes[render.flow]()
    this.className[render.flow]()
    this.children[render.flow]()
    return this.#node
  }

  @didUpdate
  @willUpdate
  [repaint.reflow] (nElement) {
    this.events[repaint.reflow](nElement.events)
    this.attributes[repaint.reflow](nElement.attributes)
    this.className[repaint.reflow](nElement.className)
    this.children[repaint.reflow](nElement.children)
    return this
  }

  static create (nodeName, attrs, children) {
    attrs = Object.entries(attrs)
    return new Element(nodeName, attrs, children)
  }

  static is (nodeName) {
    return typeof nodeName === 'string'
  }
}

export default Element
