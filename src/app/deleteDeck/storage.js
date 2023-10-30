import middleware from '@standard/middleware'
import request from '@standard/request'
import response from '@standard/response'
import supabase from '@artifact/supabase'

async function del (deck) {
  const payload = deck[request.Delete]?.()
  const { error } = await supabase.from('deck').delete().eq('id', payload.id)
  error
    ? deck[response.Error]?.(error)
    : deck[response.Ok]?.()
}

const push = middleware((deck) => {
  del(deck)
})

export default {
  push
}
