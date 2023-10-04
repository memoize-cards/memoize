import middleware from '@standard/middleware'
import request from '@standard/request'
import result from '@standard/result'
import supabase from '@artifact/supabase'

async function del (deck) {
  const payload = deck[request.Delete]?.()
  const { error } = await supabase.from('deck').delete().eq('id', payload.id)
  error
    ? deck[result.Error]?.(error)
    : deck[result.Ok]?.()
}

const push = middleware(function (deck) {
  del(deck)
})

export default {
  push
}
