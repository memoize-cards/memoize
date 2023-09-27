const env = new Proxy({}, {
  get: (_target, key) => (process.env.NODE_ENV === key)
})

export default env
