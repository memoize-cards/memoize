import interceptor from '@standard/interceptor'
import magic from '@standard/magic'
import supabase from '@artifact/supabase'

const { onDeauthenticated, onError } = magic

const deauthenticate = interceptor(function (args, next) {
  setImmediate(() => {
    supabase
      .auth
      .signOut()
      .then(({ error }) => (
        error
          ? this[onError]?.(error)
          : this[onDeauthenticated]?.()
      ))
  })
  return next(...args)
})

export default {
  deauthenticate,
  onDeauthenticated,
  onError
}
