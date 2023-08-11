function formData (_target, _prop, descriptor) {
  const next = descriptor.value
  Object.assign(descriptor, {
    value (e) {
      const value = (e instanceof Event)
        ? Object.fromEntries([...new FormData(e.target)])
        : e
      return Reflect.apply(next, this, [value])
    }
  })
}

export default formData
