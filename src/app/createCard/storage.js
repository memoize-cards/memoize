import cookie from '@standard/cookie'
import interceptor from '@standard/interceptor'
import result from '@standard/result'
import supabase from '@artifact/supabase'

const request = async function (card) {
  const { id } = cookie
  const { back, deck, front, interval, type } = card
  const { data, error } = await supabase.from('card').insert([{ back, deck, front, interval, type, user_id: id }]).select()
  error
    ? card[result.Error]?.(error)
    : card[result.Ok]?.(data)
}

const push = interceptor(function (args, next) {
  setImmediate(() => request(this))
  return next(...args)
})

export default {
  push
}
