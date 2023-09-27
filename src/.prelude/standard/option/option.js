const option = new Proxy({}, {
  get: function (_, x) {
    return function (...args) {
      return new Proxy({}, {
        get: function (_, y) {
          return function (functionRef) {
            (x === y) && functionRef(...args)
          }
        }
      })
    }
  }
})

export default option
