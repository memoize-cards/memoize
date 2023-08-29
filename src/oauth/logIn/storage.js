import interceptor from '@standard/interceptor'
import result from '@standard/result'
import supabase from '@artifact/supabase'

const request = async function (auth) {
  const { email, password } = auth
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  error
    ? auth[result.Error]?.(error)
    : auth[result.Ok]?.(data)
}

const pull = interceptor(function (args, next) {
  setImmediate(() => request(this))
  return next(...args)
})

export default {
  pull
}
