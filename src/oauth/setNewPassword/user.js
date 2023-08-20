import interceptor from '@standard/interceptor'
import magic from '@standard/magic'
import supabase from '@artifact/supabase'

const { onPasswordReset, onError } = magic

const setNewPassword = interceptor(function (args, next) {
  setImmediate(async () => {
    const { password } = this
    const { data, error } = await supabase.auth.updateUser({ password })
    error
      ? this[onError]?.(error)
      : this[onPasswordReset]?.(data)
  })
  return next(...args)
})

export default {
  setNewPassword,
  onError,
  onPasswordReset
}
