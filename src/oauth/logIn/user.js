import interceptor from '@standard/interceptor'
import supabase from '@artifact/supabase'

const authenticated = Symbol('authenticated')
const invalid = Symbol('invalid')

const authenticate = interceptor(function (args, next) {
  setImmediate(async () => {
    const { email, password } = this
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    error
      ? this[invalid]?.(error)
      : this[authenticated]?.(data)
  })
  return next(...args)
})

export default {
  authenticate,
  authenticated,
  invalid
}
