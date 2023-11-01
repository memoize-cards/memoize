import magic from '@standard/magic'

const dispatch = new Proxy({}, {
  get (_target, event) {
    return function (_target, _prop, descriptor) {
      const method = descriptor.value
      Object.assign(descriptor, {
        value () {
          const output = method.apply(this, arguments)
          setImmediate(() => this[magic[event]]?.(output))
          return output
        }
      })
    }
  }
})

export default dispatch
