function resolveDunders (functionRef) {
  return function (...args) {
    const dunderMethod = functionRef.__
    const evaluate = (value) => (value[dunderMethod]?.() ?? value)
    return functionRef(...args.map(evaluate))
  }
}

export default resolveDunders
