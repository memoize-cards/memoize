function generateHash () {
  return `_${Math.random().toString(36).slice(2)}`
}

export default generateHash
