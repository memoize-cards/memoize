function middleware (functionRef) {
  return function (ClassRef) {
    return new Proxy(
      async function (...args) {
        const next = async (...args) => await new ClassRef(...args)
        return await functionRef(args, next)
      },
      {
        get: (_, key) => Reflect.get(ClassRef, key),
        set: (_, key, value) => (Reflect.set(ClassRef, key, value), true)
      }
    )
  }
}

export default middleware
