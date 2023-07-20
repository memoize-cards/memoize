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

/**
 * Class representing a Fragment, which is a lightweight container that allows you to group a list of elements without
 * introducing an additional DOM node.
 *
 * @class
 * @param {Object} attrs - The attributes for the Fragment.
 * @param {Array} children - The children elements of the Fragment.
 */
@revoke
class Fragment {
  #children
  #key
  #node
  #slot

  /**
   * Get the children elements of the Fragment.
   *
   * @returns {Array} The array of children elements.
   */
  get children () {
    return this.#children
  }

  /**
   * Get the key value of the Fragment.
   *
   * @returns {string} The key value.
   */
  get key () {
    return this.#key.value
  }

  /**
   * Get the slot value of the Fragment.
   *
   * @returns {string} The slot value.
   */
  get slot () {
    return this.#slot.value
  }

  /**
   * Create a new Fragment instance.
   *
   * @constructor
   * @param {Object} attrs - The attributes for the Fragment.
   * @param {Array} children - The children elements of the Fragment.
   */
  constructor (attrs, children) {
    this.#children = Children.create(children, this)
    this.#key = Key.create(attrs)
    this.#slot = Slot.create(attrs)
  }

  /**
   * Append a child element after the last child of the Fragment.
   *
   * @param {Element} child - The child element to append.
   * @returns {Fragment} The Fragment instance for method chaining.
   */
  @overload(
    'appendChild'
  )
  after (child) {
    const [...childList] = this.#children
    const lastChild = childList.pop()
    lastChild.after(child)
    return this
  }

  /**
   * Append an array of child elements to the Fragment.
   *
   * @param {Array} childList - The array of child elements to append.
   * @returns {Fragment} The Fragment instance for method chaining.
   */
  append (childList) {
    const nodeList = childList.map((child) => child[render.flow]())
    this.#node.append(...nodeList)
    return this
  }

  /**
   * Remove the Fragment and all its children from the DOM.
   *
   * @returns {Fragment} The Fragment instance for method chaining.
   */
  @didUnmount
  @willUnmount
  remove () {
    const [...childList] = this.#children
    childList.forEach((child) => child.remove())
    return this
  }

  /**
   * Replace a child element with a new child element in the Fragment.
   *
   * @param {Element} child - The child element to be replaced.
   * @param {Element} nChild - The new child element to replace.
   * @returns {Fragment} The Fragment instance for method chaining.
   */
  replace (child, nChild) {
    child.after(nChild)
    child.remove()
    return this
  }

  /**
   * Handle reflowing Fragment changes from the new Fragment instance to the current instance.
   *
   * @param {Fragment} nFragment - The new Fragment instance to compare.
   * @returns {Fragment} The Fragment instance for method chaining.
   */
  [reflow.different] (nFragment) {
    return (
      this[paint.instance]?.() !== nFragment[paint.instance]?.()
    )
  }

  /**
   * Handle reflowing Fragment changes that are considered the same from the new Fragment instance to the current instance.
   *
   * @param {Fragment} nFragment - The new Fragment instance to compare.
   * @returns {Fragment} The Fragment instance for method chaining.
   */
  [reflow.same] (nFragment) {
    return (
      (this.key && this.key === nFragment.key) ||
      (this[paint.instance]?.() && this[paint.instance]?.() === nFragment[paint.instance]?.())
    )
  }

  /**
   * Attach all children of the Fragment to the Fragment node.
   *
   * @returns {DocumentFragment} The created DocumentFragment node.
   */
  @didMount
  @willMount
  [render.flow] () {
    this.#node ??= document.createDocumentFragment()
    this.children[render.flow]()
    return this.#node
  }

  /**
   * Handle repainting changes from the new Fragment instance to the current instance.
   *
   * @param {Fragment} fragment - The new Fragment instance to compare.
   * @returns {Fragment} The Fragment instance for method chaining.
   */
  @didUpdate
  @willUpdate
  [repaint.reflow] (fragment) {
    this.children[repaint.reflow](fragment.children)
    return this
  }

  /**
   * Create a new Fragment instance based on the provided attributes and children.
   *
   * @static
   * @param {Object} attrs - The attributes for the Fragment.
   * @param {Array} children - The children elements of the Fragment.
   * @returns {Fragment} A new Fragment instance.
   */
  static execute (attrs, children) {
    attrs = Object.entries(attrs)
    children = children.flat(Infinity)
    return new Fragment(attrs, children)
  }
}

export default Fragment.execute
