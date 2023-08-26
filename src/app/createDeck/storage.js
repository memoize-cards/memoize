import cookie from '@standard/cookie'
import interceptor from '@standard/interceptor'
import magic from '@standard/magic'
import supabase from '@artifact/supabase'

const { onCreated, onError } = magic

const create = interceptor(function (args, next) {
  setImmediate(async () => {
    const { id: user_id } = cookie
    const { name, description } = this
    const { data, error } = await supabase.from('deck').insert([{ name, description, user_id }]).select()
    error
      ? this[onError]?.(error)
      : this[onCreated]?.(data)
  })
  return next(...args)
})

export default {
  create,
  onCreated,
  onError
}
