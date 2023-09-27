function overload (...args) {
  return function (target, method) {
    args.forEach((prop) => (
      Reflect.defineProperty(target, prop, {
        value () {
          return this[method](...arguments)
        },
        writable: true
      })
    ))
  }
}

export default overload
