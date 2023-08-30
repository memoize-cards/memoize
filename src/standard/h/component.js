import Slot from './slot'

class Component {
  static execute (functionRef, attrs, children) {
    children = Slot.mapper(children)
    return functionRef(attrs, children)
  }

  static is (nodeName) {
    return typeof nodeName === 'function'
  }
}

export default Component
