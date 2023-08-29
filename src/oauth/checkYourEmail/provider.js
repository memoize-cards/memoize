import * as f from '@standard/f'
import { args } from '@standard/router'

const provider = {
  get url () {
    const { email } = args
    const start = f.multiply(email.indexOf('@'), -1)
    const domain = email.slice(start)
    return `https://${domain}`
  }
}

export default provider
