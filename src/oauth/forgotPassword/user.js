import { urlFor } from '@standard/router'
import interceptor from '@standard/interceptor'
import magic from '@standard/magic'
import supabase from '@artifact/supabase'

const { onError, onPasswordReset } = magic

const resetPassword = interceptor(function (args, next) {
  setImmediate(() => {
    const { email } = this
    const redirectTo = urlFor('setNewPassword')
    supabase
      .auth
      .resetPasswordForEmail(email, { redirectTo })
      .then(({ data, error }) => (
        error
          ? this[onError]?.(error)
          : this[onPasswordReset]?.(data)
      ))
  })
  return next(...args)
})

export default {
  resetPassword,
  onPasswordReset,
  onError
}
