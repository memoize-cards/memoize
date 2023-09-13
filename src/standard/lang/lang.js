import { args } from '@standard/router'
import cookie from '@standard/cookie'

const lang = {
  EN: 'en-US',
  ES: 'es',
  PT: 'pt-BR',

  get value () {
    return (
      cookie.lang ||
      args.lang ||
      navigator.language ||
      lang.PT
    )
  },

  set value (value) {
    cookie.lang = value
  }
}

export default lang
