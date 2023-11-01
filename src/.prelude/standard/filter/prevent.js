function prevent (_target, _prop, descriptor) {
  const next = descriptor.value
  Object.assign(descriptor, {
    value (e) {
      e instanceof Event && e.preventDefault()
      return next.apply(this, arguments)
    }
  })
}

export default prevent
