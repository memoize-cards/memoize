import interceptor from '@standard/interceptor'
import request from '@standard/request'
import response from '@standard/response'
import supabase from '@artifact/supabase'

async function insert (card) {
  const payload = await card[request.Post]?.()
  const { data, error } = await supabase.from('card').insert([payload]).select().single()
  error
    ? card[response.Error]?.(error)
    : card[response.Ok]?.(data)
}

const push = interceptor(function (args, next) {
  setImmediate(() => insert(this))
  return next(...args)
})

export default {
  push
}
