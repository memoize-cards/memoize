import Deck from './deck'
import middleware from '@standard/middleware'
import request from '@standard/request'
import response from '@standard/response'
import supabase from '@artifact/supabase'

const pull = middleware(async (target) => {
  const payload = target[request.Get]?.()
  const { count, error } = await supabase.from('card').select('*', { count: 'exact', head: true }).eq('deck', Deck.id).eq('type', payload.type)
  error
    ? target[response.Error]?.(error)
    : target[response.Ok]?.(count)
})

export default {
  pull
}
