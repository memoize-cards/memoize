import interceptor from '@standard/interceptor'
import result from '@standard/result'
import supabase from '@artifact/supabase'

const request = async function (auth) {
  const { email, name, password } = auth
  const { data, error } = await supabase.auth.signUp({ email, password, options: { data: { name } } })
  error
    ? auth[result.Error]?.(error)
    : auth[result.Ok]?.(data)
}

const push = interceptor(function (args, next) {
  setImmediate(() => request(this))
  return next(...args)
})

export default {
  push
}
