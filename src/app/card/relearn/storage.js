import interceptor from '@standard/interceptor'
import request from '@standard/request'
import result from '@standard/result'
import supabase from '@artifact/supabase'

async function update (card) {
  const payload = await card[request.Post]?.()
  const { data, error } = await supabase.from('card').update(payload).eq('id', card.id).select()
  error
    ? card[result.Error]?.(error)
    : card[result.Ok]?.(data)
}

const push = interceptor(async function storage (args, next) {
  await next(...args)
  await update(this)
  return this
})

export default {
  push
}
