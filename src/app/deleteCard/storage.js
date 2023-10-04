import middleware from '@standard/middleware'
import request from '@standard/request'
import result from '@standard/result'
import supabase from '@artifact/supabase'

async function del (card) {
  const payload = card[request.Delete]?.()
  const { error } = await supabase.from('card').delete().eq('id', payload.id)
  error
    ? card[result.Error]?.(error)
    : card[result.Ok]?.()
}

const push = middleware(async function (card) {
  del(card)
})

export default {
  push
}
