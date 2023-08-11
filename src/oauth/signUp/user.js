import interceptor from '@standard/interceptor'
import magic from '@standard/magic'
import supabase from '@artifact/supabase'

const { onCreated, onInvalid } = magic

const create = interceptor(function (args, next) {
  setImmediate(() => {
    const { email, name, password } = this
    supabase
      .auth
      .signUp({ email, password, options: { data: { name } } })
      .then(({ data, error }) => (
        error
          ? this[onInvalid]?.(error)
          : this[onCreated]?.(data)
      ))
  })
  return next(...args)
})

export default {
  create,
  onCreated,
  onInvalid
}
