import Component from './component'
import Element from './element'

function h (nodeName, attrs, ...children) {
  attrs ??= {}
  if (Element.is(nodeName)) return Element.create(nodeName, attrs, children)
  if (Component.is(nodeName)) return Component.execute(nodeName, attrs, children)
}

export default h
