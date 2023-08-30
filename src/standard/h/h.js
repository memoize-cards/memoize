import Children from './children'
import Component from './component'
import Element from './element'

async function h (nodeName, attrs, ...children) {
  attrs ??= {}
  children = await Children.evaluate(children)
  if (Element.is(nodeName)) return Element.create(nodeName, attrs, children)
  if (Component.is(nodeName)) return Component.execute(nodeName, attrs, children)
}

export default h
