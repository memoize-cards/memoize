import result from '@standard/result'

function pattern (patternText) {
  return function (_target, _prop, descriptor) {
    const next = descriptor.value
    Object.assign(descriptor, {
      value (value) {
        return (new RegExp(patternText, 'i').test(value))
          ? (
              this[result.Ok]?.(),
              next.call(this, value)
            )
          : this[result.Ok]?.('pattern')
      }
    })
  }
}

export default pattern
