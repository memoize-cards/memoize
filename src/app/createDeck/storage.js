import cookie from '@standard/cookie'
import interceptor from '@standard/interceptor'
import result from '@standard/result'
import supabase from '@artifact/supabase'

const request = async function (deck) {
  const { id } = cookie
  const { name, description } = deck
  const { data, error } = await supabase.from('deck').insert([{ name, description, user_id: id }]).select().single()
  error
    ? deck[result.Error]?.(error)
    : deck[result.Ok]?.(data)
}

const push = interceptor(function (args, next) {
  setImmediate(() => request(this))
  return next(...args)
})

export default {
  push
}
