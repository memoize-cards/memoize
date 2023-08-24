import cookie from '@standard/cookie'
import magic from '@standard/magic'
import middleware from '@standard/middleware'
import supabase from '@artifact/supabase'

const { onAuthenticated } = magic

const user = middleware(async function (home) {
  const { data: { user } } = await supabase.auth.getUser(cookie.access_token)
  user && home[onAuthenticated]?.(user)
})

Object.assign(user, {
  onAuthenticated
})

export default user
