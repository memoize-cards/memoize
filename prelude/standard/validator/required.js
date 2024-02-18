import result from '@standard/result'

function required (_target, _prop, descriptor) {
  const next = descriptor.value
  Object.assign(descriptor, {
    value (value) {
      return value
        ? (
            this[result.Ok]?.(),
            next.call(this, value)
          )
        : this[result.Ok]?.('required')
    }
  })
}

export default required
