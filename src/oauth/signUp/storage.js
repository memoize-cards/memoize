import interceptor from '@standard/interceptor'
import response from '@standard/response'
import supabase from '@artifact/supabase'

const request = async function (auth) {
  const { email, name, password } = auth
  const { data, error } = await supabase.auth.signUp({ email, password, options: { data: { name } } })
  error
    ? auth[response.Error]?.(error)
    : auth[response.Ok]?.(data)
}

const push = interceptor(function (args, next) {
  setImmediate(() => request(this))
  return next(...args)
})

export default {
  push
}
