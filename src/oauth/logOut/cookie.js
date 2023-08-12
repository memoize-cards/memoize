import cookie from '@standard/cookie'
import interceptor from '@standard/interceptor'

const removeUser = interceptor(function (args, next) {
  cookie.access_token = null
  cookie.name = null
  return next(...args)
})

export default {
  removeUser
}
