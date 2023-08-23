import { urlFor } from '@standard/router'
import cookie from '@standard/cookie'
import middleware from '@standard/middleware'
import supabase from '@artifact/supabase'

const user = middleware(async function () {
  const { data: { user } } = await supabase.auth.getUser(cookie.access_token)
  user && location.assign(urlFor('dashboard'))
})

export default user
