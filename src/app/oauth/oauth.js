import middleware from '@standard/middleware'
import redirectTo from './redirectTo'
import supabase from '@artifact/supabase'

const required = middleware(async function () {
  const { data } = await supabase.auth.getUser()
  !data.user && redirectTo.logOut()
})

export default {
  required
}
