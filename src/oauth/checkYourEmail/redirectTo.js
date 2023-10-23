import * as f from '@standard/f'
import { args, urlFor } from '@standard/router'

const redirectTo = {
  forgotPassword () {
    location.assign(urlFor('forgotPassword'))
    return this
  },

  logIn () {
    location.assign(urlFor('logIn'))
    return this
  },

  provider () {
    const { email } = args
    const start = f.multiply(email.indexOf('@'), -1)
    const domain = email.slice(start)
    const url = `https://${domain}`
    window.open(url, '_blank')
  }
}

export default redirectTo
