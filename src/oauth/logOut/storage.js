import interceptor from '@standard/interceptor'
import supabase from '@artifact/supabase'

const push = interceptor(async function (args, next) {
  await supabase.auth.signOut()
  return next(...args)
})

export default {
  push
}
