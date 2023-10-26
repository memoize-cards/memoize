function middleware (functionRef) {
  return function (ClassRef) {
    return new Proxy(
      (...args) => {
        const instance = new ClassRef(...args)
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
