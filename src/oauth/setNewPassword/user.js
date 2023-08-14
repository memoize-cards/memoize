import interceptor from '@standard/interceptor'
import magic from '@standard/magic'

const { onPasswordReset, onError } = magic

const setNewPassword = interceptor(function (args, next) {
  return next(...args)
})

export default {
  setNewPassword,
  onError,
  onPasswordReset
}
