function cond (...targets) {
  return (...args) => {
    const [, process] = targets.find(([can]) => can(...args))
    return process(...args)
  }
}

export default cond
