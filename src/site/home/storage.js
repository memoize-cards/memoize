import middleware from '@standard/middleware'
import result from '@standard/result'
import supabase from '@artifact/supabase'

const pull = middleware(async function (args, next) {
  const home = await next(...args)
  const { data: { user } } = await supabase.auth.getUser()
  user && home[result.Ok]?.(user)
  return home
})

export default {
  pull
}