function middleware (functionRef) {
  return function (ClassRef) {
    return new Proxy(
      function () {
        const instance = new ClassRef(...arguments)
        setImmediate(() => functionRef(instance))
        return instance
      },
      {
        get: (_, key) => Reflect.get(ClassRef, key),
        set: (_, key, value) => (Reflect.set(ClassRef, key, value), true)
      }
    )
  }
}

export default middleware
