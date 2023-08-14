import * as f from '@standard/f'
import * as filter from '@standard/filter'
import { args } from '@standard/router'
import { paint } from '@standard/h'
import component from './component'

@paint(component)
class Auth {
  @filter.prevent
  openEmailApp () {
    const { email } = args
    const start = f.multiply(email.indexOf('@'), -1)
    const domain = email.slice(start)
    window.open(`https://${domain}`, '_blank')
    return this
  }
}

export default Auth
