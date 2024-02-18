export default (value) => (
  {
    done: () => value,

    pipe (functionRef) {
      value = functionRef(value)
      return this
    }
  }
)
