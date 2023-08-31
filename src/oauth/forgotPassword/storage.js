import { urlFor } from '@standard/router'
import interceptor from '@standard/interceptor'
import result from '@standard/result'
import supabase from '@artifact/supabase'

const request = async function (auth) {
  const { email } = auth
  const redirectTo = `https://memoize.cards${urlFor('setNewPassword')}`
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo })
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
