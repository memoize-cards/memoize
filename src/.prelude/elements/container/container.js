import styled from '@standard/styled'

const container = new Proxy({}, {
  get: (_target, key) =>
    styled[key]`
      margin: 0 auto;
      max-width: 425px;
      width: 100%;
    `
})

export default container
