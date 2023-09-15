import cookie from '@standard/cookie'
import interceptor from '@standard/interceptor'

const setUser = interceptor(function (args, next) {
  const [user] = args
  cookie.id = user.id
  cookie.avatar = user.user_metadata.avatar_url
  cookie.name = user.user_metadata.name
  return next(...args)
})

export default {
  setUser
}
