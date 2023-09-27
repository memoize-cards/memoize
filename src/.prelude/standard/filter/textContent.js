function textContent (_target, _prop, descriptor) {
  const next = descriptor.value
  Object.assign(descriptor, {
    value (e) {
      const value = (e instanceof Event)
        ? e.target.textContent
        : e
      return Reflect.apply(next, this, [value])
    }
  })
}

export default textContent
