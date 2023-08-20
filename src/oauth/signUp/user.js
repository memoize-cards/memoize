import interceptor from '@standard/interceptor'
import magic from '@standard/magic'
import supabase from '@artifact/supabase'

const { onCreated, onInvalid } = magic

const create = interceptor(function (args, next) {
  setImmediate(async () => {
    const { email, name, password } = this
    const { data, error } = await supabase.auth.signUp({ email, password, options: { data: { name } } })
    error
      ? this[onInvalid]?.(error)
      : this[onCreated]?.(data)
  })
  return next(...args)
})

export default {
  create,
  onCreated,
  onInvalid
}
