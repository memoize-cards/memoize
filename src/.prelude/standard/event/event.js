import magic from '@standard/magic'

const event = new Proxy({}, {
  get (_target, event) {
    return function (functionRef, target) {
      const method = target[magic[event]] ?? function () { return undefined }
      Reflect.defineProperty(target, magic[event], {
        value () {
          Reflect.apply(method, this, arguments)
          functionRef(...arguments)
        },
        writable: true
      })
    }
  }
})

export default event
