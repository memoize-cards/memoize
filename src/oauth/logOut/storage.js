import middleware from '@standard/middleware'
import response from '@standard/response'
import supabase from '@artifact/supabase'

const push = middleware(async (auth) => {
  await supabase.auth.signOut()
  auth[response.Ok]?.()
})

export default {
  push
}
