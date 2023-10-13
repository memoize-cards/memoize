import middleware from '@standard/middleware'
import request from '@standard/request'
import response from '@standard/response'
import supabase from '@artifact/supabase'

async function del (card) {
  const payload = card[request.Delete]?.()
  const { error } = await supabase.from('card').delete().eq('id', payload.id)
  error
    ? card[response.Error]?.(error)
    : card[response.Ok]?.()
}

const push = middleware(function (card) {
  del(card)
})

export default {
  push
}
